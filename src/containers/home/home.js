import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './home.css';
import p1 from '../../assets/t1.jpeg'
import p2 from '../../assets/t2.jpeg'
import p3 from '../../assets/t3.jpeg'
import p4 from '../../assets/t4.jpeg'
class Home extends Component {
    state = {
        value: ""
    }
    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>

                <header className={classes.header}>
                    <div className="text-center">

                        <h4>Welcome to  </h4>
                        <h2 className={classes.brand}>ocshs </h2>
                        <Link className={" btn btn-outline-warning btn-lg rounded-pill"} to="/activity">Go</Link>
                    </div>
                </header>
                <div className="container py-5 mb-4">
                    <div className="row text-center">
                        <div className="col text-uppercase">

                            <h1>How to use</h1>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-sm-6 d-flex h3 font-weight-boold">
                            <span className="pr-3">1</span>
                            <p>
                                Click on the padlock sign at the top-left edge of your search bar
</p>
                        </div>
                        <div className="col-sm-6">
                            <img src={p4} alt="" className={classes.tutImg} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 d-flex h3 font-weight-boold">
                            <span className="pr-3">2</span>
                            <p>
                                Click on "site settings" at the bottoom of the menu
</p>
                        </div>
                        <div className="col-sm-6">
                            <img src={p1} alt="" className={classes.tutImg} />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-sm-6 d-flex h3 font-weight-boold">
                            <span className="pr-3">3</span>
                            <p>
                                Click on "Allow your camera". Also do the same for "Allow your microphone"
</p>
                        </div>
                        <div className="col-sm-6">
                            <img src={p2} alt="" className={classes.tutImg} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 d-flex h3 font-weight-boold">
                            <span className="pr-3">4</span>
                            <p>
                                Make sure it is set to allow
</p>
                        </div>
                        <div className="col-sm-6">
                            <img src={p3} alt="" className={classes.tutImg} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home