import WelcomeClass from "./components/WelcomeClass";
import WelcomeFunc from "./components/WelcomeFunc";
import Student from "./components/Student";
import RandomName from "./components/RandomName";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import UserPage from "./components/UserPage";
import Button1 from "./components/Button1";
import InputParent from "./components/InputParent";
import RegistPage from "./components/RegistPage";
import Card from "./components/card/card";
import BookApp from "./components/book/BookApp";
const App = () => {
  const handleClick = () => {
    alert("点击了按钮");
  };

  return (
    <>
      {/* <WelcomeClass name="React!!!" />
      <WelcomeFunc name="React" />
      <Student
        name="zhangsan"
        avatar="https://whyhd.oss-cn-nanjing.aliyuncs.com/2024/11/16/c1c03762-b4ad-4a8c-9e0b-06bd2eed8b61.png"
        age="18"
      />
      <RandomName /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button onClick={handleClick} /> */}
      {/* <UserPage /> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* <InputParent /> */}
      {/* <RegistPage /> */}
      {/* <Card
        header={<h1>这个卡片的标题</h1>}
        body={<div>我是玉面手雷王</div>}
        footer={<button>Boom</button>}
      /> */}
      <BookApp />
    </>
  );
};
export default App;
