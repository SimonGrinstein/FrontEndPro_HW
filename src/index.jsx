import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import Lesson01 from "./lessons/lesson01/Lesson01";
// import Lesson02 from "./lessons/lesson02/Lesson02";
// import Homework02 from "./homeworks/homework02/Homework02";
// import Lesson03 from "./lessons/lesson03/Lesson03";
// import Homework03 from "./homeworks/homework03/Homework03";
// import Lesson04 from "./lessons/lesson04/Lesson04";
 import Homework04 from "./homeworks/homework04/Homework04";
// import Lesson05 from "./lessons/lesson05/Lesson05";
import Homework05 from "./homeworks/homework05/Homework05";

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
    {/* <Homework03 /> */}
    {/* <Lesson04 /> */}
    <Homework04 />
    {/* <Lesson05 /> */}
    <Homework05 />
    
  </>
);

