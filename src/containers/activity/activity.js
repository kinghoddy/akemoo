import React, { Component } from 'react'
import CommentForm from '../../components/forms/comment/comment';
import firebase from '../../firebase';
import 'firebase/database';
import { Route } from 'react-router-dom'
import Picture from '../../assets/avatar_square.png';
import Posts from '../../components/posts/posts'
import classes from './activity.css';
import Spinner from '../../components/UI/Spinner/Spinner'
import VC from '../../components/videochat/videochat'
class Activity extends Component {
    state = {
        name: '',
        comment: "",
        activity: "",
        posts: []
    }
    inputChanged = (e, type) => {
        console.log(type);
        if (type === 'name') {
            this.setState({ name: e.target.value });
        } else {
            this.setState({ comment: e.target.value });

        }
    };
    changeStyle = change => {
        if (this.state.changeStyle !== change) {
            this.setState({ changeStyle: change });

            var con = document.getElementById("scroll");
            if (con) {
                setTimeout(() => {
                    con.scrollTop = con.scrollHeight + 100000;
                }, 500);
            }
        }
    };
    updateActivity = (e) => {
        e.preventDefault()
        firebase.database().ref('activity/activity').set(this.state.activity).then(e => {
            this.getPosts9(this.state.activity)
        })
    }
    activityChanged = (e) => {
        this.setState({ activity: e.target.value })
    }
    componentDidMount() {
        const ref = firebase.database().ref('/activity/');
        ref.on('value', s => {
            this.getPosts(s.val().activity)
            this.setState({ activity: s.val().activity })
        })
    }
    sendPost = (e) => {
        e.preventDefault();
        const ref = firebase.database().ref('/activity/' + this.state.activity)
        ref.push({
            username: this.state.name,
            comment: this.state.comment.split("\n").join("<br/>"),
            date: Date.now(),
            profilePicture: Picture
        }).then(() => {
            this.setState({ comment: '', username: '' })
        })
    }

    getPosts = (activity) => {
        this.setState({ loading: true });
        firebase.database().ref('activity/' + activity).on('value', s => {
            const posts = []
            let inst

            console.log(s.val());

            if (s.val()) {

                for (let key in s.val()) {
                    if (s.val()[key].comment) {
                        s.val()[key].comment = s.val()[key].comment.replace('\n', '<br/>')
                        posts.push(s.val()[key])
                        this.setState({ posts: posts.reverse(), loading: false, instructions: inst })
                    } else {
                        this.setState({ loading: false })
                    }
                }
            } else {

                this.setState({ loading: false })
            }
        })
    }
    render() {
        return (
            <div className={classes.wrapper}>
                <Route path="/activity/admin" render={() => (
                    <form onSubmit={this.updateActivity} className="p-4  form-group d-flex">
                        <input type='text' className="form-control" value={this.state.activity} onChange={this.activityChanged} placeholder="Change activity" />
                        <button className="btn btn-success">Go</button>
                    </form>
                )} />
       
                <Route path="/activity" exact component={VC} />
                <div className={classes.body}>

                    <CommentForm
                        changeStyle={this.changeStyle}
                        changed={(e, type) => { this.inputChanged(e, type) }}
                        name={this.state.name}
                        submit={this.sendPost}
                        comment={this.state.comment}
                    />
                             <h4 className={classes.inst }>
                    {this.state.activity}
                </h4>
                    {
                        this.state.loading ? <div style={{ height: "40vh" }}> <Spinner fontSize="8px" /> </div> : this.state.posts.map(cur => (

                            <Posts {...cur} />
                        ))
                    }

                </div>
            </div >
        )
    }
}

export default Activity