import classes from './Comment.module.css';
//span + p
const Comment = (props) => {
    return (
        <div className={classes.comment}>
            <div className={classes.who}><h3>Сумаил</h3><p>13 октября 2011</p></div>
            
            <div className={classes.text}><p>Привет, Верунь! ниче себе ты крутая. фотка класс!!!!</p></div>

            <div className={classes.who}><h3>Лилия Семёновна </h3><p>14 октября 2011</p></div>
            <div className={classes.text}><p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно 
                известный центр огранки алмазов и торговли бриллиантами?</p></div>

            <div className={classes.who}><h3>Лилия Семёновна </h3><p>14 октября 2011</p></div> 
            <div className={classes.text}><p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?</p></div>

        </div>

    )
}
export default Comment;