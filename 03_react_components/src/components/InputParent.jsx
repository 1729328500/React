import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [inuptValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Input onInputChange={handleInputChange} />
      <h2>输入的值是:{inuptValue}</h2>
    </>
  );
};
export default InputParent;
