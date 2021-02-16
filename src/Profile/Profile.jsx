import classes from './Profile.module.css'
import logo from "../img/logo.png";

const Profile = (props) => {
    return <div className={classes.wrapper}>
        <div className={classes.profileInfo}>
            <div className={classes.name}>
                <p>Вероника Ростова</p>
            </div>
            <div className={classes.proffesion}>
                <p>Менеджер по продажам</p>
            </div>
            <div className={classes.info}>
                <p>
                    Подберу для вас самые лучшие предложения, мои услуги абсолютно
                    бесплатны.
                </p>
            </div>
        </div>
        <div className={classes.avatar}> <img src={logo} /></div>

    </div>
}
export default Profile;
