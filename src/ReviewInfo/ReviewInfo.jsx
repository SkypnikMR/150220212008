import classes from './ReviewInfo.module.css'
import like from '../img/like.svg'
import comment from '../img/comment.svg'

const ReviewInfo = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.first}>
                <p>Последние отзывы</p>
            </div>
            <div className={classes.second}>
                <a href="#">Все отзывы</a>
            </div>
            <div className={classes.third}>
                <img src={like} /><p>131</p>
            </div>
            <div className={classes.four}>
                <img src={comment} /><p>14</p>
            </div>
        </div>
    )
}
export default ReviewInfo;