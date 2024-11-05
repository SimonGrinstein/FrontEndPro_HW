// импорт хука useState()
import { useState } from "react";
import "./lesson04.css";
import MyButton from "../../components/myButton/MyButton";

function Lesson04() {
  // * изменение обычных переменных в React не приведет к обновлению компонента 🫤

  // let count = 0;

  // const handleMinus = () => {
  //   count = count - 1
  //   console.log(count)
  // }

  // const handlePlus = () => {
  //   count = count + 1
  //   console.log(count)
  // }

  // * забираем значения из хука долго и в три строчки (так мы делать не будем)

  // let state = useState(0)
  // let count = state[0]
  // let setCount = state[1]

  // * функция useState принимает начальное значение
  // * возвращает массив из двух элементов, которые мы забираем через деструктуризацию
  // 1. - переменная состояния с текущим значением
  // 2. - функция для изменения этой переменной

  // * пример с счетчиком (числовое значение)
  const [count, setCount] = useState(0);

  // * пример со строкой
  // const [name, setName] = useState('John')

  // * пример с булевым значением
  // const [toggle, setToggle] = useState(true)


  const handleMinus = () => {
    setCount(prev => prev - 1);
  };

  const handlePlus = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="lesson-container">
      <h2>Lesson 04</h2>
      <p>React hook useState()🪝</p>
      <div className="counter">
        <MyButton func={handleMinus} text={'-'} />
        {/* <button onClick={handleMinus}>-</button> */}
        <span>{count}</span>
        <MyButton func={handlePlus} text={'+'} isDanger={false}/>
        {/* <button onClick={handlePlus}>+</button> */}
      </div>
      <p>
        Чтобы хранить и отображать на странице изменяющиеся данные в React мы используем 'состояние'
        (state) - это особая переменная в React, которая приходит в результате выполнения функции
        useState(). Если это переменная изменится - это будет сигнал к обновлению страницы.
      </p>
      <p>
        Чтобы изменить значения состояния мы используем функцию, которая приходит вторым элементом в
        массиве из useState() - она перезаписывает состояние. Изменение состояния вызывает ререндр с
        новыми данными
      </p>
    </div>
  );
}

export default Lesson04;