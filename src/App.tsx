import About from "./About";
import "./App.css";
import Body from "./Body";
import Login from "./Login";
import Team from "./Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <a href="/">Home </a>
      <a href="/about">About </a>
      <a href="/team">Team </a>
      <a href="/login">Login </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
