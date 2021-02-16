import classes from "./App.module.css";
import Comment from "./Comment/Comment";
import Profile from "./Profile/Profile";
import Service from './Service/Service';
import ReviewInfo from './ReviewInfo/ReviewInfo'
//150220212008

function App() {
  return (
    <div className={classes.wrapper}>
      <Profile />
      <Service />
      <ReviewInfo />
      <Comment />
      <div className={classes.InputArea}></div>
    </div>
  );
}

export default App;
