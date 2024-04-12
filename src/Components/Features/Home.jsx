import ImgP1 from './../../assets/img/p1.jpg'
import ImgP2 from './../../assets/img/p2.jpg'
import ImgP3 from './../../assets/img/p3.jpg'
import ImgP4 from './../../assets/img/p4.jpg'
import ImgPsider from './../../assets/img/p-sider.jpg'
import ImgAbout from './../../assets/img/about.jpg'




const Home = () => {
  return (
    <>
  {/* <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="w-100" src="img/carousel-1.jpg" alt="Image">
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style="max-width: 900px;">
                      <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                      <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                      <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                      <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <img class="w-100" src="img/carousel-2.jpg" alt="Image">
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style="max-width: 900px;">
                      <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                      <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                      <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                      <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                  </div>
              </div>
          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div> */}
  {/* Navbar & Carousel End */}
  {/*  */}
  <div className="container-fluid  mb-5 mt-2  ">
    <div className="row my-4">
      <div className="col-md-6  ">
        <div className="card  border-0  w-100" style={{ paddingTop: "5rem" }}>
          <img
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/team-24_attribution-logo-above-left_full-color_RGB.svg"
            alt=""
            width="300px"
            className="mb-2 img-fluid "
          />
          <div className="card-body ps-0 ">
            <p className="card-subtitle" style={{ fontSize: "1.25rem" }}>
              April 30 - May 2, 2024 <span className="mx-3">|</span> Las Vegas
              and digitally
            </p>
            <h4 className="card-title  fw-bold my-3 ">
              Be the first to see how AI is powering the Atlassian portfolio to
              drive acceleration, efficiency, and excellence.
            </h4>
            <button type="button" className="btn btn-primary">
              Lear more{" "}
            </button>
          </div>
        </div>
          </div>
          

      <div className="col-md-6">
        <div className="p-0 m-0 text-center">
          <video
            playsInline
            muted
            preload="auto"
            poster="//wac-cdn.atlassian.com/misc-assets/webp-images/team-24-promotion-header-static-mobile.webp"
            autoPlay
            className="mobile-video w-100"
            loop
          >
            <source
              src="//wac-cdn.atlassian.com/misc-assets/webp-images/Team-24-Animated-Website-Hero_Mobile_329x253.webm"
              type="video/webm"
            />
            <img
              src="//wac-cdn.atlassian.com/misc-assets/webp-images/team-24-promotion-header-static-mobile.webp"
              alt="speaker at team 24 conference"
              style={{ maxWidth: "100%" }}
              className="fallback-img--mobile"
            />
          </video>
        </div>
      </div>
    </div>
  </div>
          {/*  */}
          

          <div className="container">
  <div className="row">
    <div className="col-md-12 col-sm-12 col-12 ">
      <h1 className="mt-2 text-center " style={{ fontSize: "30px" }}>
        Atlassian solutions are designed for all types of work
      </h1>
      <div className="col-md-12 text-center ">
        <ul className="nav nav-underline  mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active  text-dark  mx-2 mb-1 mt-1 border-0"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              Work Managment
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-dark  mx-2 mb-1 mt-1 border-0 "
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              IT Service Managment
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-dark mx-2 mb-1 mt-1 border-0"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              Agile and DevOps
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              <h2
                style={{
                  lineHeight: "1.3",
                  fontWeight: "600",
                  fontSize: "21px",
                  color: "#172B4D"
                }}
              >
                Make work flow across teams <br /> while connecting back to
                company goals
              </h2>
              <a href="">
                Work differently, together{" "}
                <i className="fa-solid fa-square-right mx-2" />
              </a>
              <div className="col-md-4 col-md-4 col-12  mt-3">
                <div className="d-flex justify-content-start mt-4">
                  <img src={ImgP1} className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Confluence
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Content collaboration
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src={ImgP2} className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Trelloe
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Visual project management
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src={ImgP3} className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Jira Work Management
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Business team collaboration
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src={ImgP4} className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Atlas
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Teamwork directory
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-12">
                <div className="img">
                  <img src={ImgPsider} className="img-fluid " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              <h2
                style={{
                  lineHeight: "1.3",
                  fontWeight: "600",
                  fontSize: "21px",
                  color: "#172B4D"
                }}
              >
                Enable your dev, IT ops, and <br /> business teams to deliver
                great <br /> service experiences
              </h2>
              <a href="">
                Deliver at high velocity{" "}
                <i className="fa-solid fa-square-right mx-2" />
              </a>
              <div className="col-md-4 col-md-4 col-12  mt-3">
                <div className="d-flex justify-content-start mt-4">
                  <img
                    src="./img/92a31ef9-62c6-4c4c-a3db-5bba45b56c2f.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div>
                    <h4>Service Managment</h4>
                    <p>High-velocity ITSM</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-12">
                <div className="img">
                  <img
                    src="./img/355466a3-62e9-4b14-9658-c7e72a129ad2.jpg"
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              <h2
                style={{
                  lineHeight: "1.3",
                  fontWeight: "600",
                  fontSize: "21px",
                  color: "#172B4D"
                }}
              >
                Run a world-class agile software <br /> company—from discovery
                to <br /> delivery and operations
              </h2>
              <a href="">
                Explore Open DevOps{" "}
                <i className="fa-solid fa-square-right mx-2" />
              </a>
              <div className="col-md-4 col-md-4 col-12  mt-3">
                <div className="d-flex justify-content-start mt-4">
                  <img src="./img/b1.jpg" className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Jira Software
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Project and issue tracking
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src="./img/b2.jpg" className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Jira Product Discovery
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Prioritization and roadmapping
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src="./img/b3.jpg" className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Jira Align
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Business team collaboration
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src="./img/b4.jpg" className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Compass
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Developer experience platform
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                  <img src="./img/b5.jpg" className="img-fluid mx-2" alt="" />
                  <div className="mt-3">
                    <h4
                      className="mt-1 mb-1"
                      style={{ fontWeight: "700", fontSize: "15px" }}
                    >
                      Bitbucket
                    </h4>
                    <p
                      style={{ fontWeight: "700", fontSize: "14px" }}
                      className="text-secondary "
                    >
                      Code &amp; CI/CDy
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-12">
                <div className="img">
                  <img
                    src="./img/b-siderbar.jpg"
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
          </div>
          

        
  {/* Full Screen Search Start */}
  {/* <div class="modal fade" id="searchModal" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
      <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
          <div class="modal-header border-0">
              <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center justify-content-center">
              <div class="input-group" style="max-width: 600px;">
                  <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword">
                  <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Full Screen Search End */}
  {/* Facts Start */}
  {/* <div class="container-fluid facts py-5 pt-lg-0">
  <div class="container py-5 pt-lg-0">
      <div class="row gx-0">
          <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
                  <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                      <i class="fa fa-users text-primary"></i>
                  </div>
                  <div class="ps-4">
                      <h5 class="text-white mb-0">Happy Clients</h5>
                      <h1 class="text-white mb-0" data-toggle="counter-up">12345</h1>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div class="bg-light shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
                  <div class="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                      <i class="fa fa-check text-white"></i>
                  </div>
                  <div class="ps-4">
                      <h5 class="text-primary mb-0">Projects Done</h5>
                      <h1 class="mb-0" data-toggle="counter-up">12345</h1>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
                  <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                      <i class="fa fa-award text-primary"></i>
                  </div>
                  <div class="ps-4">
                      <h5 class="text-white mb-0">Win Awards</h5>
                      <h1 class="text-white mb-0" data-toggle="counter-up">12345</h1>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Facts Start */}
  <section>
    {/* <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-12 ">
        <h1 class="mt-2 text-center " style="font-size: 30px;">Atlassian solutions are designed for all types of work</h1>
        <div class="col-md-12 text-center ">
          <ul class="nav nav-underline  mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active  text-dark " id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                style="font-weight: 500; font-size: 18px;">Work Managment</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-dark  " id="pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                aria-selected="false" style="font-weight: 500; font-size: 18px;">IT Service Managment</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-dark " id="pills-contact-tab" data-bs-toggle="pill"
                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                aria-selected="false" style="font-weight: 500; font-size: 18px;">Agile and DevOps</button>
            </li>
    
          </ul>
        </div>
    
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
            tabindex="0">
            <div class="container">
              <div class="row">
                <h2 style="line-height: 1.3; font-weight: 600; font-size: 21px; color: #172B4D;">Make work flow across
                  teams <br> while connecting back to company  goals</h2>
                <a href="">Work differently, together <i class="fa-solid fa-square-right mx-2"></i></a>
                <div class="col-md-4 col-md-4 col-12  mt-3">
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/p1.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Confluence</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Content collaboration</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/p2.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Trelloe</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Visual project management
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/p3.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Jira Work Management</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Business team
                        collaboration</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/p4.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Atlas</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Teamwork directory</p>
                    </div>
                  </div>
    
                </div>
                <div class="col-md-8 col-sm-8 col-12">
                  <div class="img">
                    <img src="./img/p-sider.jpg" class="img-fluid " alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
            tabindex="0">
            <div class="container">
              <div class="row">
                <h2 style="line-height: 1.3; font-weight: 600; font-size: 21px; color: #172B4D;">Enable your dev, IT
                  ops, and <br> business teams to deliver great <br> service experiences</h2>
                <a href="">Deliver at high velocity <i class="fa-solid fa-square-right mx-2"></i></a>
                <div class="col-md-4 col-md-4 col-12  mt-3">
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/92a31ef9-62c6-4c4c-a3db-5bba45b56c2f.jpg" class="img-fluid" alt="">
                    <div>
                      <h4>Service Managment</h4>
                      <p>High-velocity ITSM</p>
                    </div>
                  </div>
    
    
                </div>
                <div class="col-md-8 col-sm-8 col-12">
                  <div class="img">
                    <img src="./img/355466a3-62e9-4b14-9658-c7e72a129ad2.jpg" class="img-fluid " alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
            tabindex="0">
            <div class="container">
              <div class="row">
                <h2 style="line-height: 1.3; font-weight: 600; font-size: 21px; color: #172B4D;">Run a world-class
                  agile software <br> company—from discovery to <br> delivery and operations</h2>
                <a href="">Explore Open DevOps <i class="fa-solid fa-square-right mx-2"></i></a>
                <div class="col-md-4 col-md-4 col-12  mt-3">
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/b1.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Jira Software</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Project and issue tracking
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/b2.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Jira Product Discovery</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Prioritization and
                        roadmapping</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/b3.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Jira Align</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Business team
                        collaboration</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/b4.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Compass</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Developer experience
                        platform</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <img src="./img/b5.jpg" class="img-fluid mx-2" alt="">
                    <div class="mt-3">
                      <h4 class="mt-1 mb-1" style="font-weight: 700; font-size: 15px;">Bitbucket</h4>
                      <p style="font-weight: 700; font-size: 14px;" class="text-secondary ">Code & CI/CDy</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 col-12">
                  <div class="img">
                    <img src="./img/b-siderbar.jpg" class="img-fluid " alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  </div> */}
              </section>
              
              
  <section
    className="mt-4 mb-5"
    style={{ background: "linear-gradient(#fae5e5, #b1b6e4)" }}
  >
    <div className="container">
      <div className="row">
        <h4
          className="text-center mt-4 mb-3"
          style={{ fontWeight: 700, color: "#172B4D", fontSize: 20 }}
        >
          Join the 250,000+ companies that use our software to power team
          collaboration
        </h4>
        <a
          href=""
          style={{ fontWeight: 600, fontSize: 15 }}
          className="text-center mt-2 mb-3"
        >
          See all customers <i className="fa-solid fa-square-right" />
        </a>
        <div className="col-md-2 col-sm-2   mb-5 mt-3">
          <div className="text-center ">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:77c2f652-ab9b-4619-b175-c3f408c3e350/kiva.svg"
              className="img-fluid "
              alt=""
            />
          </div>
        </div>
        <div className="col-md-2 col-sm-2 mb-5 mt-3">
          <div className="text-center ">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:0a7dd09c-7f87-4bc9-8b65-318b0a41efb8/twitter.svg"
              className="img-fluid "
              alt=""
            />
          </div>
        </div>
        <div className="col-md-2 col-sm-2   mb-5 mt-3">
          <div className="text-center ">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:46501297-a5e1-482a-9f8f-3718dd24376e/redfin.svg"
              className="img-fluid "
              alt=""
            />
          </div>
        </div>
        <div className="col-md-2 col-sm-2   mb-5">
          <div className="text-center ">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:67ac3b31-6097-49f8-b1c2-efdc492ddae1/nasa.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-2 col-sm-2   mb-5 mt-3">
          <div className="text-center ">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:debe18ec-0a3d-4bfc-aa58-f11948d8d056/audi.svg"
              className="img-fluid "
              alt=""
            />
          </div>
        </div>
        <div className="col-md-2 col-sm-2  mb-5 mt-3">
          <div className="text-center ">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:63951eab-b7d9-4d5f-ab23-ba511d27d4aa/castlight.svg"
              className="img-fluid"
              style={{ width: 100 }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mb-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-12 mt-5  align-items-center ">
          <h6
            className="text-primary mt-4"
            style={{ fontWeight: 700, fontSize: 18 }}
          >
            TEAM ESSENTIALS
          </h6>
          <h4 style={{ color: "#172B4D", fontSize: 35 }}>
            Explore resources to <br /> unleash the potential <br /> of your
            team
          </h4>
        </div>
        <div className="col-md-8 col-md-8 col-12">
          <div className="mt-4 shadow ">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Community@2x-3332122863.webp"
              className="img-fluid rounded-2 "
              alt=""
            />
            <h4 className="text-center mt-4">Atlassian Community</h4>
            <p
              className="text-center text-secondary pb-2"
              style={{ fontWeight: 600 }}
            >
              Connect globally and meet locally to get more out of our products.
            </p>
            <div className="d-flex  justify-content-center ">
              <span
                className="mx-4 text-primary pb-2"
                style={{ fontWeight: 700 }}
              >
                Search the forum
              </span>
              <span
                className="mx-4 text-primary pb-2"
                style={{ fontWeight: 700 }}
              >
                Join our community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mt-5 mb-5">
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-4 col-sm-4 col-12 mt-2 mb-2">
          <div className="card shadow border-0 rounded-1 h-100 ">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Blog_360x265%402x.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center ">
              <h5 className="text-center ">Work Life</h5>
              <p className="text-center">
                Real-life advice, inspiration, and stories from the working
                world today.
              </p>
              <a
                href="#"
                className="btn text-primary "
                style={{ fontWeight: 600 }}
              >
                Read our blog
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-12 mt-2 mb-2">
          <div className="card shadow border-0 rounded-1 h-100">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/Team%2520Playbook_360x265%402x.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center ">
              <h5 className="text-center ">Atlassian Team Playbook</h5>
              <p className="text-center">
                Solve common team challenges with these group exercises.
              </p>
              <a
                href="#"
                className="btn text-primary "
                style={{ fontWeight: 600 }}
              >
                Check team health
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-12 mt-2 mb-2">
          <div className="card shadow border-0 rounded-1 h-100">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/team_anywear_illo.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center ">
              <h5 className="text-center ">Distributed Work</h5>
              <p className="text-center">
                Advance how your distributed teams collaborate.
              </p>
              <a
                href="#"
                className="btn text-primary "
                style={{ fontWeight: 600 }}
              >
                Our evidence-based approach
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4 col-sm-4 col-12 mt-2 mb-2">
          <div className="card border-0 rounded-1 h-100 ">
            <div className="card-body text-center mt-5">
              <h5
                className="text-center text-primary "
                style={{ fontSize: 22, fontWeight: 600 }}
              >
                EVENTS
              </h5>
              <p
                className="text-center"
                style={{ fontWeight: 600, color: "#172B4D", fontSize: 30 }}
              >
                Hear from today's <br />
                fearless builders and <br /> innovators
              </p>
              <a
                href="#"
                className="btn text-primary "
                style={{ fontWeight: 600 }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-12 mt-2 mb-2">
          <div className="card shadow border-0 rounded-1 h-100">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/team24promobanner.webp-3262748562.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center "></div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-12 mt-2 mb-2">
          <div className="card shadow border-0 rounded-1 h-100 ">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/high-velocity.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center "></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row">
        <h6
          style={{ fontSize: 18, fontWeight: 700 }}
          className="text-center text-primary "
        >
          CAREERS
        </h6>
        <h5 className="text-center" style={{ fontWeight: 600, fontSize: 35 }}>
          We can’t do it alone
        </h5>
        <p
          className="text-center text-secondary "
          style={{ fontWeight: 600, fontSize: 18 }}
        >
          We have an ambitious road ahead, and we’re looking for people to{" "}
          <br /> join our global team to help shape the future of Atlassian.
        </p>
        <div className="text-center mb-4">
          <button className="btn btn-primary ">Join the team</button>
        </div>
      </div>
    </div>
                  </section>
                  

                  
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
            <h1 className="mb-0">
              The Best IT Solution With 10 Years of Experience
            </h1>
          </div>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Award Winning
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Professional Staff
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                24/7 Support
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Fair Prices
              </h5>
            </div>
          </div>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
          <a
            href="quote.html"
            className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
            data-wow-delay="0.9s"
          >
            Request A Quote
          </a>
        </div>
        <div className="col-lg-5" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src={ImgAbout}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Features Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
          <h1 class="mb-0">We Are Here to Grow Your Business Exponentially</h1>
      </div>
      <div class="row g-5">
          <div class="col-lg-4">
              <div class="row g-5">
                  <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                      <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                          <i class="fa fa-cubes text-white"></i>
                      </div>
                      <h4>Best In Industry</h4>
                      <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                      <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                          <i class="fa fa-award text-white"></i>
                      </div>
                      <h4>Award Winning</h4>
                      <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
              <div class="position-relative h-100">
                  <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style="object-fit: cover;">
              </div>
          </div>
          <div class="col-lg-4">
              <div class="row g-5">
                  <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                      <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                          <i class="fa fa-users-cog text-white"></i>
                      </div>
                      <h4>Professional Staff</h4>
                      <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                      <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                          <i class="fa fa-phone-alt text-white"></i>
                      </div>
                      <h4>24/7 Support</h4>
                      <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Features Start */}
  {/* Service Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 class="mb-0">Custom IT Solutions for Your Successful Business</h1>
      </div>
      <div class="row g-5">
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="service-icon">
                      <i class="fa fa-shield-alt text-white"></i>
                  </div>
                  <h4 class="mb-3">Cyber Security</h4>
                  <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                  <a class="btn btn-lg btn-primary rounded" href="">
                      <i class="bi bi-arrow-right"></i>
                  </a>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="service-icon">
                      <i class="fa fa-chart-pie text-white"></i>
                  </div>
                  <h4 class="mb-3">Data Analytics</h4>
                  <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                  <a class="btn btn-lg btn-primary rounded" href="">
                      <i class="bi bi-arrow-right"></i>
                  </a>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="service-icon">
                      <i class="fa fa-code text-white"></i>
                  </div>
                  <h4 class="mb-3">Web Development</h4>
                  <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                  <a class="btn btn-lg btn-primary rounded" href="">
                      <i class="bi bi-arrow-right"></i>
                  </a>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="service-icon">
                      <i class="fab fa-android text-white"></i>
                  </div>
                  <h4 class="mb-3">Apps Development</h4>
                  <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                  <a class="btn btn-lg btn-primary rounded" href="">
                      <i class="bi bi-arrow-right"></i>
                  </a>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <div class="service-icon">
                      <i class="fa fa-search text-white"></i>
                  </div>
                  <h4 class="mb-3">SEO Optimization</h4>
                  <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                  <a class="btn btn-lg btn-primary rounded" href="">
                      <i class="bi bi-arrow-right"></i>
                  </a>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                  <h3 class="text-white mb-3">Call Us For Quote</h3>
                  <p class="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                  <h2 class="text-white mb-0">+012 345 6789</h2>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Service End */}

        
  {/* Pricing Plan Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
        <h1 className="mb-0">
          We are Offering Competitive Prices for Our Clients
        </h1>
      </div>
      <div className="row g-0">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="bg-light rounded">
            <div className="border-bottom py-4 px-5 mb-4">
              <h4 className="text-primary mb-1">Basic Plan</h4>
              <small className="text-uppercase">For Small Size Business</small>
            </div>
            <div className="p-5 pt-0">
              <h1 className="display-5 mb-3">
                <small
                  className="align-top"
                  style={{ fontSize: "22px", lineHeight: "45px" }}
                >
                  $
                </small>
                49.00
                <small
                  className="align-bottom"
                  style={{ fontSize: "16px", lineHeight: "40px" }}
                >
                  / Month
                </small>
              </h1>
              <div className="d-flex justify-content-between mb-3">
                <span>HTML5 &amp; CSS3</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Bootstrap v5</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Responsive Layout</span>
                <i className="fa fa-times text-danger pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cross-browser Support</span>
                <i className="fa fa-times text-danger pt-1" />
              </div>
              <a href="" className="btn btn-primary py-2 px-4 mt-4">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div
            className="bg-white rounded shadow position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="border-bottom py-4 px-5 mb-4">
              <h4 className="text-primary mb-1">Standard Plan</h4>
              <small className="text-uppercase">For Medium Size Business</small>
            </div>
            <div className="p-5 pt-0">
              <h1 className="display-5 mb-3">
                <small
                  className="align-top"
                  style={{ fontSize: "22px", lineHeight: "45px" }}
                >
                  $
                </small>
                99.00
                <small
                  className="align-bottom"
                  style={{ fontSize: "16px", lineHeight: "px" }}
                >
                  / Month
                </small>
              </h1>
              <div className="d-flex justify-content-between mb-3">
                <span>HTML5 &amp; CSS3</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Bootstrap v5</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Responsive Layout</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cross-browser Support</span>
                <i className="fa fa-times text-danger pt-1" />
              </div>
              <a href="" className="btn btn-primary py-2 px-4 mt-4">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="bg-light rounded">
            <div className="border-bottom py-4 px-5 mb-4">
              <h4 className="text-primary mb-1">Advanced Plan</h4>
              <small className="text-uppercase">For Large Size Business</small>
            </div>
            <div className="p-5 pt-0">
              <h1 className="display-5 mb-3">
                <small
                  className="align-top"
                  style={{ fontSize: "22px", lineHeight: "45px" }}
                >
                  $
                </small>
                149.00
                <small
                  className="align-bottom"
                  style={{ fontSize: "16px", lineHeight: "px" }}
                >
                  / Month
                </small>
              </h1>
              <div className="d-flex justify-content-between mb-3">
                <span>HTML5 &amp; CSS3</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Bootstrap v5</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Responsive Layout</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cross-browser Support</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <a href="" className="btn btn-primary py-2 px-4 mt-4">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pricing Plan End */}
  {/* Quote Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="row g-5">
          <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                  <h5 class="fw-bold text-primary text-uppercase">Request A Quote</h5>
                  <h1 class="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
              </div>
              <div class="row gx-3">
                  <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                      <h5 class="mb-4"><i class="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                  </div>
                  <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                      <h5 class="mb-4"><i class="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                  </div>
              </div>
              <p class="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
              <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                  <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                      <i class="fa fa-phone-alt text-white"></i>
                  </div>
                  <div class="ps-4">
                      <h5 class="mb-2">Call to ask any question</h5>
                      <h4 class="text-primary mb-0">+012 345 6789</h4>
                  </div>
              </div>
          </div>
          <div class="col-lg-5">
              <div class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                  <form>
                      <div class="row g-3">
                          <div class="col-xl-12">
                              <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style="height: 55px;">
                          </div>
                          <div class="col-12">
                              <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style="height: 55px;">
                          </div>
                          <div class="col-12">
                              <select class="form-select bg-light border-0" style="height: 55px;">
                                  <option selected>Select A Service</option>
                                  <option value="1">Service 1</option>
                                  <option value="2">Service 2</option>
                                  <option value="3">Service 3</option>
                              </select>
                          </div>
                          <div class="col-12">
                              <textarea class="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                          </div>
                          <div class="col-12">
                              <button class="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Quote End */}
  {/* Testimonial Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 class="mb-0">What Our Clients Say About Our Digital Services</h1>
      </div>
      <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-1.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-2.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-3.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
          <div class="testimonial-item bg-light my-4">
              <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img class="img-fluid rounded" src="img/testimonial-4.jpg" style="width: 60px; height: 60px;" >
                  <div class="ps-4">
                      <h4 class="text-primary mb-1">Client Name</h4>
                      <small class="text-uppercase">Profession</small>
                  </div>
              </div>
              <div class="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Testimonial End */}
  {/* Team Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 class="mb-0">Professional Stuffs Ready to Help Your Business</h1>
      </div>
      <div class="row g-5">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="team-item bg-light rounded overflow-hidden">
                  <div class="team-img position-relative overflow-hidden">
                      <img class="img-fluid w-100" src="img/team-1.jpg" alt="">
                      <div class="team-social">
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      </div>
                  </div>
                  <div class="text-center py-4">
                      <h4 class="text-primary">Full Name</h4>
                      <p class="text-uppercase m-0">Designation</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="team-item bg-light rounded overflow-hidden">
                  <div class="team-img position-relative overflow-hidden">
                      <img class="img-fluid w-100" src="img/team-2.jpg" alt="">
                      <div class="team-social">
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      </div>
                  </div>
                  <div class="text-center py-4">
                      <h4 class="text-primary">Full Name</h4>
                      <p class="text-uppercase m-0">Designation</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div class="team-item bg-light rounded overflow-hidden">
                  <div class="team-img position-relative overflow-hidden">
                      <img class="img-fluid w-100" src="img/team-3.jpg" alt="">
                      <div class="team-social">
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                          <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      </div>
                  </div>
                  <div class="text-center py-4">
                      <h4 class="text-primary">Full Name</h4>
                      <p class="text-uppercase m-0">Designation</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Team End */}
  {/* Blog Start */}
  {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 class="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div class="row g-5">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="blog-item bg-light rounded overflow-hidden">
                  <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="img/blog-1.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                  </div>
                  <div class="p-4">
                      <div class="d-flex mb-3">
                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                      <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="blog-item bg-light rounded overflow-hidden">
                  <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="img/blog-2.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                  </div>
                  <div class="p-4">
                      <div class="d-flex mb-3">
                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                      <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div class="blog-item bg-light rounded overflow-hidden">
                  <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="img/blog-3.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                  </div>
                  <div class="p-4">
                      <div class="d-flex mb-3">
                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                      <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> */}
  {/* Blog Start */}
 




    </>
  )
}

export default Home
