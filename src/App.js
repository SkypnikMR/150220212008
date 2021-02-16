import classes from "./App.module.css";
import heart from "./img/heart.png";
import comment from "./img/comment.png";
import Comment from "./Comment/Comment";
import Profile from './Profile/Profile';

//150220212008

function App() {
  return (
    <div className={classes.wrapper}>
      <Profile/>
      <div className={classes.info2}>
        <div className={classes.services1}>
          <p>Услуг</p>
        </div>
        <div className={classes.services2}>
          <p className={classes.green}>Ручное бронирование</p>
          <p>11</p>
        </div>
        <div className={classes.services3}>
          <p className={classes.blueLong}>Пакетные туры</p>
          <p>3</p>
        </div>
        <div className={classes.services4}>
          <p className={classes.blueShirt}>Отели</p>
          <p>1</p>
        </div>
        <div className={classes.services5}>
          <p className={classes.all}>Всего</p>
          <p className={classes.all}>15</p>
        </div>
      </div>
      <div className={classes.info3}>
        <div>
          <h3>Последние отзывы</h3>
        </div>
        <div>
          <h3>
            <a href="#">Все отзывы</a>
          </h3>
        </div>
        <div>
          {" "}
          <img src={heart} /> <p>131</p>
        </div>
        <div>
          {" "}
          <img src={comment} /> <p>14</p>
        </div>
      </div>
      <Comment />
      <div className={classes.InputArea}></div>
    </div>
  );
}

export default App;
