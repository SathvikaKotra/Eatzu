import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">E</div>
          <span className="brand-text">Eatzu</span>
        </div>

        <nav className="nav-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Browse
          </a>
          <a href="#" className="nav-link">
            Orders
          </a>
          <a href="#" className="nav-link">
            Profile
          </a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost">Sign in</button>
          <button className="btn btn-primary">Get the app</button>
        </div>
      </div>
    </header>
  );
}
