import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ fontWeight: 700, color: "#0f3b3a" }}>
          Eatzu — Food delivery & pickup
        </div>
        <div className="footer-links">
          <a href="#" className="small-link">
            About
          </a>
          <a href="#" className="small-link">
            Careers
          </a>
          <a href="#" className="small-link">
            Help
          </a>
        </div>
        <div className="small-text">© {new Date().getFullYear()} Eatzu</div>
      </div>
    </footer>
  );
}
