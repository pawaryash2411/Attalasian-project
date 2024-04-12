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
              <a href="/" className="nav-item nav-link ">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/service" className="nav-item nav-link">
                Services
              </a>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/blog-grid" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="/details" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/price" className="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="/feature" className="dropdown-item">
                    Our features
                  </a>
                  <a href="/team" className="dropdown-item">
                    Team Members
                  </a>
                  <a href="/testimonial" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="/quote" className="dropdown-item">
                    Free Quote
                  </a>
                </div>
              </div>
              <a href="/contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
