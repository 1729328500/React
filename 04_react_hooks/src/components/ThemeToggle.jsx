import React from "react";
import { useState } from "react";
const ThemeToggle = () => {
  //使用useState这个Hook来存储当前的主题状态
  //isDarkMode为true表示暗黑模式
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };
  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
        aliquam eaque recusandae nobis quae facilis, ipsum consequatur ut
        repudiandae laborum saepe, cupiditate quasi blanditiis esse aperiam
        aliquid assumenda numquam sint.
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
