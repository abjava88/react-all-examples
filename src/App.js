import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Book from "./component/Book";
import Book1 from "./component/Book1";
import { Book2 } from "./component/Book2";
import Profile from "./component/Profile";
import Title from "./component/Title";
import Title1 from "./component/Title1";
import Title2 from "./component/Title2";
import Title3 from "./component/Title3";
import ToggleExercise from "./component/exercises/ToggleLight";
import PageCounter from "./component/hooks/PageCounter";
import UserControls from "./component/hooks/useContexte/UserControls";
import UserInfo from "./component/hooks/useContexte/UserInfo";
import UserProvider from "./component/hooks/useContexte/UserProvider";
import ThemeProvider from "./component/hooks/useContexte/exercise/ThemeProvider";
import ThemedButton from "./component/hooks/useContexte/exercise/ThemedButton";
import CallApi from "./component/hooks/useEffect/CallApi";
import DataFetcher from "./component/hooks/useEffect/DataFetcher";
import Home from "./component/routing/Home";
import About from "./component/routing/About";
import UserList from "./component/examples/filtrage/UserList";
import PaginationExample from "./component/examples/pagination/PaginationExample";
import FocusInput from "./component/examples/refs/FocusInput";
import CompleteForm from "./component/examples/formulaire/CompleteForm";
import ExampleComponent from "./component/examples/service/ExampleComponent";
import { useState } from "react";
import LoginForm from "./component/tp/LoginForm";
import Dashboard from "./component/tp/Dashboard";
import Form from "./component/Form";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Abbes" },
  { id: 6, name: "Aron" },
  { id: 7, name: "Abram" },
];

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  console.log(`isAuthenticated : ${isAuthenticated}`);
  return (
    <>
      <Title />
      <Title1 />
      <Title2 />
      <Book />
      <Title3 title="Javascript" author="Abbes" />
      <Book1>
        <Title3 title="Javascript" author="Abbes" />
      </Book1>
      <Book2 isNew="true">
        <Title3 title="Javascript" author="Abbes" />
      </Book2>

      <PageCounter />

      <CallApi />

      <Profile />

      <ToggleExercise />

      <DataFetcher />

      {/* useContext exemple */}
      <UserProvider>
        <div>
          <h1>User Authentication Example</h1>
          <UserInfo />
          <UserControls />
        </div>
      </UserProvider>

      {/* useContext exercise */}
      <ThemeProvider>
        <div>
          <h1>useContext theme example</h1>
          <ThemedButton />
        </div>
      </ThemeProvider>

      {/* use of react router dom */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

      {/* Filtring in react  */}
      <div>
        <h2>List of Users</h2>
        <UserList users={users} />
      </div>

      {/* Pagination example */}
      <PaginationExample />

      {/* Les formulaires */}
      {/* Refs */}
      <FocusInput />
      <CompleteForm />

      {/* Appel des services */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/posts" element={<ExampleComponent />} />
          </Routes>
        </div>
      </Router>

      {/* Travail Pratique */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <LoginForm setAuthenticated={setAuthenticated} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>

      <p>End of page</p>

      <Form />
    </>
  );
}

export default App;
