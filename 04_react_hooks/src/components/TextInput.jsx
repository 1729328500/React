import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("abc");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <p>当前输入的内容{inputValue}</p>
    </div>
  );
};

export default TextInput;
