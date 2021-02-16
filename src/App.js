import classes from "./App.module.css";
import heart from "./img/heart.png";
import comment from "./img/comment.png";
import Comment from "./Comment/Comment";
import Profile from "./Profile/Profile";
import Service from './Service/Service';
//150220212008

function App() {
  return (
    <div className={classes.wrapper}>
      <Profile />
      <Service />
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
