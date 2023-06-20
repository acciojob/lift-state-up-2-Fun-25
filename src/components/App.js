
import React,{useState}from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue,setInputValue]=useState(0)
  return (
    <div>
      <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <div>
        <h2> Child Component</h2>
        <Child setInput={setInputValue}>
           
        </Child>
      </div>
    </div>
  );
}


export default App
