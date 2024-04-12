import { NavLink } from "react-router-dom";
import LogoImg from "./../../assets/img/logoTech.png";

const Header = () => {
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <img
              src={LogoImg}
              className="img-fluid"
              style={{ width: "210px" }}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link ">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-item nav-link">
                Services
              </NavLink>

              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/blog-grid" className="dropdown-item">
                    Blog Grid
                  </NavLink>
                  <NavLink to="/details" className="dropdown-item">
                    Blog Detail
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/price" className="dropdown-item">
                    Pricing Plan
                  </NavLink>
                  <NavLink to="/feature" className="dropdown-item">
                    Our features
                  </NavLink>
                  <NavLink to="/team" className="dropdown-item">
                    Team Members
                  </NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">
                    Testimonial
                  </NavLink>
                  <NavLink to="/quote" className="dropdown-item">
                    Free Quote
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
