import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import RouteConfig from "./routes";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">useState计数器</Link>
            </li>
            <li>
              <Link to="/zustand">Zustand计数器</Link>
            </li>
            <li>
              <Link to="/todo">待办事项</Link>
            </li>
            <li>
              <Link to="/user">用户信息</Link>
            </li>
            <li>
              <Link to="/profile">用户年龄</Link>
            </li>
          </ul>
        </nav>

        <UserProvider>
          <RouteConfig />
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
