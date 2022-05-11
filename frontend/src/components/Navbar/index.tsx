import React from "react";
import { ReactComponent as GithubIcon } from "assets/img/git.svg";
import "./style.css";
import Axios from "axios";

interface User {
  username: string;
  password: string;
}

export default function Navbar() {
  const user: User = { username: "glu", password: "1111" };
  const signIn = async () => {
    const result = Axios.post(`http://localhost:8080/api/v1/login`, user);
    result.then((res) => console.log(res)).catch((err) => console.log(err));
  };

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/gluttm" target="_blank" rel="noreferrer">
            <div onClick={signIn} className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/truetechmoz</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
