import { useState, useEffect } from "react";

const Weather = () => {
  // 使用useState Hook来管理城市名称、天气数据和加载状态
  const [city, setCity] = useState("Nanjing");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 处理输入框值变化的函数
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // 查询天气的函数
  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=854d0c4a29ea6605109b7fa050825c5a`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data); // 添加调试信息，确保数据正确解析
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      console.error(err); // 添加错误信息，便于调试
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]); // 根据城市名称变化重新查询天气

  return (
    <div>
      {/* 输入框，用于输入城市名称 */}
      <input type="text" value={city} onChange={handleCityChange} />
      {/* 按钮，用于查询天气 */}
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Loading..." : "查询天气"}
      </button>
      {/* 显示天气数据 */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>气温: {Math.round(weatherData.main.temp - 273.15)} °C</p>
          <p>体感温度: {Math.round(weatherData.main.feels_like - 273.15)} °C</p>
          <p>最低气温: {Math.round(weatherData.main.temp_min - 273.15)} °C</p>
          <p>最高气温: {Math.round(weatherData.main.temp_max - 273.15)} °C</p>
          <p>天气: {weatherData.weather[0].description}</p>
          <p>湿度: {weatherData.main.humidity}%</p>
          <p>压力: {weatherData.main.pressure} hPa</p>
          <p>风速: {weatherData.wind.speed} m/s</p>
          <p>云量： {weatherData.clouds.all}%</p>
          <p>可见性: {weatherData.visibility} m</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
