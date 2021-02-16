import classes from './NewComment.module.css'


const NewComment = (props) => {
    return (
    <div className={classes.wrapper}>
        <div className={classes.textArea}><textarea></textarea></div>
        <div className={classes.button}><button>Написать консультанту</button></div>
    </div>
    )
}

export default NewComment;