import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    // TEST Navbar
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fs-1 ps-4" href="/">
          Dusty Gray
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarDark">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
            <li className="nav-item fs-5 mx-2">
              <Link
                to="/About"
                className={
                  // This is a conditional (ternary) operator that checks to see if the current page is "About"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  currentPage === "/About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </Link>
            </li>
            <li className="nav-item fs-5 mx-2">
              <Link
                to="/Portfolio"
                className={
                  currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item fs-5 mx-2">
              <Link
                to="/Contact"
                className={
                  currentPage === "/Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item fs-5 mx-2">
              <Link
                to="/Resume"
                className={
                  currentPage === "/Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
