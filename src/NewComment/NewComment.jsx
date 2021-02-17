import classes from './NewComment.module.css'
import React from 'react'


const NewComment = ({ addComment }) => {
    const [value, setValue] = React.useState('')
    let submitHandler = (event) => {
        event.preventDefault()
        if (value !== '') {
            addComment(value)
            setValue('')
        }
        else return 0;

    }
    return (
        <form onSubmit={submitHandler} className={classes.wrapper}>
            <div className={classes.textInput}>
                <input type="text"value={value} onChange={event => setValue(event.target.value)} />
            </div>
            <div className={classes.button}><button type="submit">Написать консультанту</button></div>
        </form>
    )
}

export default NewComment;