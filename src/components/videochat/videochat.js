import React, { Component } from 'react'
import classes from './videochat.css'
import logo from '../../assets/logo.png'
class VChat extends Component {

    componentDidMount() {

    }
    toggleFullscreen = () => {
        var con = document.querySelector('#full')

        if (con.webkitRequestFullScreen) {
            con.webkitRequestFullScreen()
        } else if (con.requestFullScreen) con.requestFullScreen()
        else if (con.mozRequestFullScreen) con.mozRequestFullScreen()
        let orientation = window.screen.orientation
        orientation.lock('landscape')

    }

    render() {
        return (
            <div id="full" className={classes.iframe}>
                <iframe title="hdjdkfd" allow="microphone; camera; autoplay" src="https://hoddy.daily.co/ocshs"></iframe>

                <div className={classes.brand}>
                    <div className="d-flex align-items-center">
                        <h5>OCSHS tv</h5>
                    </div>
                    <button className="btn btn-sm  btn-outline-warning" onClick={this.toggleFullscreen}>fullscreen</button>
                </div>
            </div>

        )
    }
}

export default VChat