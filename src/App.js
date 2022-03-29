import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";
import NotFount from "./components/NotFount/NotFount";
import PostDetails from "./components/PostDetails/PostDetails";
import Posts from "./components/Posts/Posts";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/meal/:idMeal" element={<MealDetails />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postid" element={<PostDetails />}></Route>
        </Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
