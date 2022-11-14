import { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value]);
  };

  const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
    console.log(input);
  };

  const reset = () => {
    setResult("");
    setText("");
  };
  const buttonColor = "#70757A";

  console.log(text);
  return (
    <div className="calcBody">
      <div className="calculator">Basic Calculator</div>
      <Input result={result} text={text} />
      <div className="keyboardRows">
        <Button symbol="7" handleClick={addToText} />
        <Button symbol="8" handleClick={addToText} />
        <Button symbol="9" handleClick={addToText} />
        <Button symbol="/" color={buttonColor} handleClick={addToText} />
      </div>
      <div className="keyboardRows">
        <Button symbol="4" handleClick={addToText} />
        <Button symbol="5" handleClick={addToText} />
        <Button symbol="6" handleClick={addToText} />
        <Button symbol="*" color={buttonColor} handleClick={addToText} />
      </div>
      <div className="keyboardRows">
        <Button symbol="1" handleClick={addToText} />
        <Button symbol="2" handleClick={addToText} />
        <Button symbol="3" handleClick={addToText} />
        <Button symbol="+" color={buttonColor} handleClick={addToText} />
      </div>
      <div className="keyboardRows">
        <Button symbol="0" handleClick={addToText}/>
        <Button symbol="." handleClick={addToText}/>
        <Button symbol="=" handleClick={calculate} color="green" />
        <Button symbol="-" color={buttonColor} handleClick={addToText} />
      </div>
      <div className="clear" onClick={reset}>Clear</div>
    </div>
  );
}

export default App;
