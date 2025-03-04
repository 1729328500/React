import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    if (inputValue.trim()) {
      // 将新的待办事项添加到列表中
      setTodos([...todos, { text: inputValue, completed: false }]);
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 切换待办事项完成状态的函数
  const toggleComplete = (index) => {
    // 创建待办事项列表的副本
    const newTodos = [...todos];
    // 切换指定索引的待办事项的完成状态
    newTodos[index].completed = !newTodos[index].completed;
    // 更新待办事项列表
    setTodos(newTodos);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addTodo}>添加代办事项</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
