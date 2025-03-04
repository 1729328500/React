import { useState, useEffect } from "react";

const Time = () => {
  // 使用useState Hook来管理当前时间
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 设置定时器，每秒更新一次时间
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 清除定时器，防止内存泄漏
    return () => clearInterval(timer);
  }, [currentTime]);

  // 格式化时间，显示为“HH:mm:ss”
  const formatTime = (time) => {
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return <div>{formatTime(currentTime)}</div>;
};

export default Time;
