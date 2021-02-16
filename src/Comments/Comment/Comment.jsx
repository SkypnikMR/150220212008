import classes from './Comment.module.css';
const Comment = (props) => {
    return (
        <div className={classes.comment}>
            <div className={classes.who}><p>{props.person}</p><p><span>{props.date}</span></p></div>
            <div className={classes.text}><p>{props.title}</p></div>
        </div>
    )
}
export default Comment;