import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-black text-white">
      <h1>This is routing practice</h1>
      <ul className="flex py-4 justify-center gap-8 text-2xl">
        <li>
          <CustomLink to={'/'}>Home</CustomLink>
        </li>
        <li>
          <CustomLink to={"/about"}>About</CustomLink>
        </li>
        <li>
          <CustomLink to={"/posts"}>Post</CustomLink>
        </li>
        <li>
          <CustomLink to={"/user"}>User</CustomLink>
        </li>
        <li>
          <CustomLink to={"/contact"}>Contact</CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
