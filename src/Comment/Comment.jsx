import classes from './Comment.module.css';
//span + p
const Comment = (props) => {
    return (
        <div className={classes.comment}>
            <div className={classes.who}><p>Лилия Семеновна</p><p><span>13 октября 2011</span></p></div>
            <div className={classes.text}><p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц 
                жизненно стабилизирует кинетический момент, это и есть всемирно 
                известный центр огранки алмазов и торговли бриллиантами?</p></div>

        </div>

    )
}
export default Comment;