import React from "react";

function Footer() {
  return (
    <footer className="footer sticky-bottom text-light text-center bg-secondary py-3 border-3 mt-3">
      <div className="text-center col-12">
        <a
          target="_blank"
          href="https://github.com/pfdemarco"
          className="btn btn-neutral btn-icon btn-github btn-round btn-lg"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>{" "}
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/patrick-demarco/"
          className="btn btn-neutral btn-icon btn-linkedin btn-lg btn-round"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>{" "}
        </a>
        <a
          target="_blank"
          href="https://twitter.com/patrickdemarco"
          className="btn btn-neutral btn-icon btn-twitter btn-round btn-lg"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://pfdemarco.github.io/PatrickDeMarcoResume/Patrick%20F%20DeMarco%20Resume.docx"
          className="btn btn-neutral btn-icon btn-facebook btn-round btn-lg"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file fa-2x"></i>
        </a>
      </div>
      Designed & Coded by Patrick DeMarco <br />
    </footer>
  );
}

export default Footer;
