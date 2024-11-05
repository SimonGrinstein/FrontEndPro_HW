import React from "react";
import ReactDOM from "react-dom/client";
import Lesson01 from "./lessons/lesson01/Lesson01";
import "./index.css";
// импорт функции компонента
import Lesson02 from "./lessons/lesson02/Lesson02";
import Homework02 from "./homeworks/homework02/Homework02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Homework03 from "./homeworks/homework03/Homework03";
import Lesson04 from "./lessons/lesson04/Lesson04";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // этот пустой тег - это react фрагмент
  // мы используем его для того чтобы по правилам react
  // обернуть несколько дочерних компонентов в родитель
  <>
    {/* <Lesson01 /> */}
    {/* вызов react компонента */}
    {/* самозакрывающийся тег с именем функции-компонента */}
    {/* не забудьте убедиться что у вас отработал импорт */}

    {/* <Lesson02 /> */}
    
    {/* <Homework02/> */}

    {/* <Lesson03 /> */}

    <Homework03 />
    
    {/* <Lesson04 /> */}
  </>
);


