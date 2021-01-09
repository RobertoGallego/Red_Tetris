import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div style={{ display: "flex", justifyContent: "space-around", marginBlock: 10}}>
            <Link className="" to="/">Home</Link>
            <Link className="" to="/articles">Article</Link>
            <Link className="" to="/new-video">Create a New Video</Link>
        </div>
    </nav>
  );
};

export default Navbar;
