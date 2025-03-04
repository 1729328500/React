import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import Time from "./components/Time";
import Weather from "./components/Weather";
import { UserProvider } from "./components/UserContext";
import UserLogin from "./components/UserLogin";
import Counter from "./components/Counter";
import Form from "./components/From";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import UserPage from "./components/UserPage";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Custom from "./components/Custom";
import ApiList from "./components/ApiList";
import Data from "./components/Data";
import Search from "./components/Search";
const App = () => {
  const handleSearch = (query) => {
    console.log("Search for:", query);
  };

  return (
    <div>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <Time /> */}
      {/* <Weather /> */}
      {/* <UserProvider>
        <UserLogin />
      // </UserProvider> */}
      {/* <Counter />
      <Form />
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <UserPage /> */}
      {/* <ExpensiveCalculationParent />
      <ListFilterParent />
      <Parent />
      <ExpensiveComponentParent /> */}
      {/* <FocusInput />
      <PreviousValue />
      <Parent1 />
      <Parent2 /> */}
      {/* <ComponentSize />
      <AnimateBox />
      <Custom />
      <ApiList /> */}
      <Data />
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;
