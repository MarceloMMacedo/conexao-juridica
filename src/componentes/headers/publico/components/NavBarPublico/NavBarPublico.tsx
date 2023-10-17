import React from "react";

export interface NavBarPublicoProps {
  prop?: string;
}

export function NavBarPublico({ prop = "default value" }: NavBarPublicoProps) {

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-landing fixed-top job-navbar"
        id="navbar"
      >
        <div className="container-fluid custom-container">
          <a className="navbar-brand" href="index.html">
            <img
              src="assets/images/logo-dark.png"
              className="card-logo card-logo-dark"
              alt="logo dark"
              height={17}
            />
            <img src="assets/images/logo-light.png"
              className="card-logo card-logo-light"
              alt="logo light"
              height={17}
            />
          </a>
          <button className="navbar-toggler py-0 fs-20 text-body"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav mx-auto mt-2 mt-lg-0"
              id="navbar-example"
            >
              <li className="nav-item">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#process">
                  Process
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">
                  Categories
                </a>
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link" href="#findJob">
                    Find Jobs
                  </a>
                </li> */}
              {/* <li className="nav-item">
                  <a className="nav-link" href="#candidates">
                    Candidates
                  </a>
                </li> */}
              {/* <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                </li> */}
            </ul>
            <div className="">
              <a
                href="auth-signin-basic.html"
                className="btn btn-soft-primary"
              >
                <i className="ri-user-3-line align-bottom me-1" /> Login &amp;
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
