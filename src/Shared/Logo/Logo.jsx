import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      {" "}
      <div className="flex items-end">
        <img className="mb-2 w-40 h-20" src={logo} alt="" />
       
      </div>
    </Link>
  );
};

export default Logo;
