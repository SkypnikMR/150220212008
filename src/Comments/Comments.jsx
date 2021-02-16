import classes from './Comments.module.css'
import Comment from './Comment/Comment'

const Comments = (props) => {
    
    let CommentsElements = props.state.map(el => <Comment
        id={el.id}
        person={el.person}
        date={el.date}
        title={el.title}
    />);
    return <div>{(CommentsElements)}</div>
}
export default Comments;