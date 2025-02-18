import React from "react";
import "./App.css"; // 引入CSS文件

const taskList = [
  { id: 1, name: "吃饭", completed: true },
  { id: 2, name: "睡觉", completed: false },
  { id: 3, name: "敲代码", completed: false },
];

class Funny extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: taskList,
    };
  }

  handleTaskClick = (id) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  render() {
    const { taskList } = this.state;
    const incompleteCount = taskList.filter((task) => !task.completed).length;

    return (
      <div className="container">
        <h2 className="title">任务列表</h2>
        <h3 className="subtitle">
          当前未完成的任务数：
          <span className="incomplete-count">{incompleteCount}</span>
        </h3>
        <div className="task-list">
          {taskList.map((item) => (
            <div
              className="task-item"
              key={item.id}
              onClick={() => this.handleTaskClick(item.id)}
            >
              <h3
                className={`task-name ${
                  item.completed ? "completed" : "not-completed"
                }`}
              >
                任务名: {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Funny;
