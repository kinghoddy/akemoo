import React from 'react'
import classes from './comment.css'

export default props => {
    var height = 'auto'
    var textInput = document.getElementById('t')
    if (textInput) {
        height = 'auto'
        height = textInput.scrollHeight
        if (height > 55) {
            props.changeStyle(true)
        } else {
            props.changeStyle(false)

        }
    }

    return (
        <form className={classes.form} onSubmit={props.submit}>
            <input type="text" placeholder="Your name" value={props.name} onChange={(e) => { props.changed(e, 'name') }} required />
            <textarea id="t"
                style={{
                    height: height + 'px'
                }} rows="1" type="text" required onChange={(e) => { props.changed(e, 'comment') }} value={props.comment} placeholder="Your comment...." />
            <button>go</button>
        </form>
    )
}