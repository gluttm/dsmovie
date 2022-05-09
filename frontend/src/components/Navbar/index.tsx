import React from 'react'
import { ReactComponent as GithubIcon } from 'assets/img/git.svg'
import './style.css'

export default function Navbar() {
  return (
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/gluttm" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/truetechmoz</p>
                </div>
            </a>
        </div>
    </nav>
</header>
  )
}