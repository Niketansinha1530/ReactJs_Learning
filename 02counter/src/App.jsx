import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter=6;

  function addValue() {
    // console.log("Add value ",Math.random())
    if (counter < 20) {
      setCounter(counter + 1);
      //agar ek sath baday
      // setCounter((prevCounter)=>(prevCounter+1));
      // setCounter((prevCounter)=>(prevCounter+1));
      // setCounter((prevCounter)=>(prevCounter+1));
      // setCounter((prevCounter)=>(prevCounter+1));
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
    }

    // console.log(counter);
  }
  function decValue() {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Niketan and React </h1>
      <h2>counter {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decValue}>Decrese Value</button>
      <h3>
        {counter} Update counter {counter}
      </h3>
    </>
  );
}

export default App;
