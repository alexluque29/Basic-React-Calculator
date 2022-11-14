import "../styles/input.css";

const Input = ({ result, text }) => {
  return (
    <div className="inputRow">
      <div className="inputResult">
        <h1>{result}</h1>
      </div>
      <div className="inputText">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
