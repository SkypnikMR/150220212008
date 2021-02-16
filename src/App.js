import classes from "./App.module.css";
import Comments from "./Comments/Comments";
import Profile from "./Profile/Profile";
import Service from "./Service/Service";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import React from "react";
//150220212008

function App() {
  const initialState = [
    {
      id: 1,
      person: 'Лилия Семеновна', date: "13 октября 2011",
      title:
        "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
    },
    { id: 2, person: 'Лилия Семеновна', date: "13 октября 2011", title: "text1" },
    { id: 3, person: 'Лилия Семеновна', date: "13 октября 2011", title: "text1"  },
  ];
  const [state, setTodos] = React.useState(initialState);
  /* let addToDo = (title) => {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
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
      <div className={classes.InputArea}></div>
    </div>
  );
}

export default App;
