import React from "react";
import { Link,BrowserRouter as Router, useHistory } from "react-router-dom";
import Links from "../components/Link";

const NavLinks = () => {
  const links = [
    { text: "Home", path: "/" },
    { text: "Users", path: "/users" },
    { text: "Product", path: "/product" },
    { text: "Settings", path: "/settings" },
  ];

  const history = useHistory()

  const setHistory = link => {
    history.push(`${link}`)
  }
  return (
    <Router>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-12 text-center">
          {links.map((link, id) => (
            <Link  onClick={() => setHistory(link.path) } className="text-dark text-unstyle" key={id} to={link.path}>
              <Links   data={link.text} />
            </Link>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default NavLinks;
