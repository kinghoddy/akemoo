import React from 'react';
import classes from './layout.css'
import Toolbar from '../../components/Toolbar/Toolbar'

export default props => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            {props.children}
        </div>
    )
}