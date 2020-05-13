import React from 'react';
import classes from './toolbar.css';
import Logo from '../../assets/logo.png'
export default props => {
    return <nav className={classes.navbar + "  navbar py-0 px-md-5 fixed-top  navbar-expand-lg navbar-light "}>
        <a className="navbar-brand py-0 align-items-center d-flex" href="../">
            {/* <img src={Logo} alt="" /> */}
            <span className="text-capitalize ml-3  ">OCSHS</span>
        </a>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#navBar"
            aria-controls="navBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="material-icons">menu</i>
        </button>
        <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                    <a className="nav-link" href="/">
                        Home
                                </a>
                </li>
            </ul>
        </div>
    </nav>

}