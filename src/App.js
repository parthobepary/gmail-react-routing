import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFount from "./components/NotFount/NotFount";
import Posts from "./components/Posts/Posts";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
