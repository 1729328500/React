import { Routes, Route } from "react-router-dom";
import CounterUseState from "../components/CounterUseState";
import CounterZustand from "../components/CounterZustand";
import TodoList from "../components/TodoList";
import UserProfile from "../components/UserProfile";
import UpdateUser from "../components/UpdateUser";
import Profile from "../components/Profile";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<CounterUseState />} />
      <Route path="/zustand" element={<CounterZustand />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/user"
        element={
          <>
            <UserProfile />
            <UpdateUser />
          </>
        }
      />
    </Routes>
  );
};

export default RouteConfig;
