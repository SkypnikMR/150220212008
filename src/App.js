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
      person: 'Самуил', date: "13 октября 2011",
      title:
        "Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ",
    },
    { id: 2, person: 'Лилия Семеновна', date: "14 октября 2011", title: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?" },
    { id: 3, person: 'Лилия Семеновна', date: "14 октября 2011", title: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"  },
  ];
  const [state, setState] = React.useState(initialState);
  /* let addToDo = (title) => {
    setState(
      state.concat([
        {
          id: 1,
          person: 'Аноним'
          date: 'сегодня'
          title: title
        },
      ])
    );
  }; */
  return (
    <div className={classes.wrapper}>
      <Profile />
      <Service />
      <ReviewInfo />
      <Comments state={state} />
      <NewComment/>
    </div>
  );
}

export default App;
