import React from "react";
import classes from "./App.module.css";
import Comments from "./Comments/Comments";
import Profile from "./Profile/Profile";
import Service from "./Service/Service";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import NewComment from "./NewComment/NewComment";

function App() {
  const initialState = [
    {
      id: 1,
      person: "Самуил",
      date: "13 октября 2011",
      title: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ",
    },
    {
      id: 2,
      person: "Лилия Семеновна",
      date: "14 октября 2011",
      title:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
    },
    {
      id: 3,
      person: "Лилия Семеновна",
      date: "14 октября 2011",
      title:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
    },
  ];
  const [comment, setState] = React.useState(initialState);
  let addComment = (text) => {
    setState(
      comment.concat([
        {
          id: 1,
          person: "Аноним",
          date: "сегодня",
          title: text,
        },
      ])
    );
  };
  return (
    <div className={classes.wrapper}>
      <Profile />
      <Service />
      <ReviewInfo />
      <Comments comment={comment} />
      <div className={classes.footer}>
        <NewComment addComment={addComment} />
      </div>
    </div>
  );
}

export default App;
