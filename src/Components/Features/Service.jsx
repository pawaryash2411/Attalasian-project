import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ImgTestimonial1 from "./../../assets/img/testimonial-1.jpg";
import ImgTestimonial2 from "./../../assets/img/testimonial-2.jpg";
import ImgTestimonial3 from "./../../assets/img/testimonial-3.jpg";
import ImgTestimonial4 from "./../../assets/img/testimonial-4.jpg";

const Service = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Services</h1>
            <a href="" className="h5 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2" />
            <a href="" className="h5 text-white">
              Services
            </a>
          </div>
        </div>
      </div>

      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(9, 30, 62, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: 600 }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}
      {/* Service Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Our Services
            </h5>
            <h1 className="mb-0">
              Custom IT Solutions for Your Successful Business
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-shield-alt text-white" />
                </div>
                <h4 className="mb-3">Cyber Security</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-chart-pie text-white" />
                </div>
                <h4 className="mb-3">Data Analytics</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-code text-white" />
                </div>
                <h4 className="mb-3">Web Development</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fab fa-android text-white" />
                </div>
                <h4 className="mb-3">Apps Development</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">SEO Optimization</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                  est magna stet eirmod
                </p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Testimonial Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
            <h1 className="mb-0">
              What Our Clients Say About Our Digital Services
            </h1>
          </div>

          <div className="slider-container mt-5">
            <Slider {...settings}>
              <div>
                <div
                  className="card px-1 shadow"
                  style={{ backgroundColor: "#EEF9FF" }}
                >
                  <div className="card-body">
                    <div className="row border-bottom pb-4">
                      <div className="col-md-4">
                        <img
                          className="img-fluid rounded ms-4 me-2 mt-2"
                          src={ImgTestimonial1}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="col-md-8 py-2">
                        <h4 className="text-primary mb-1">Client Name</h4>
                        <small className="text-uppercase">Profession</small>
                      </div>
                    </div>

                    <div className="p-3 mx-4 my-2">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card px-1 shadow">
                  <div className="card-body">
                    <div className="row border-bottom pb-4">
                      <div className="col-md-4">
                        <img
                          className="img-fluid rounded ms-4 me-2 mt-2"
                          src={ImgTestimonial2}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="col-md-8 py-2">
                        <h4 className="text-primary mb-1">Client Name</h4>
                        <small className="text-uppercase">Profession</small>
                      </div>
                    </div>

                    <div className="p-3 mx-4 my-2">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card px-1 shadow"
                  style={{ backgroundColor: "#EEF9FF" }}
                >
                  <div className="card-body">
                    <div className="row border-bottom pb-4">
                      <div className="col-md-4">
                        <img
                          className="img-fluid rounded ms-4 me-2 mt-2"
                          src={ImgTestimonial3}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="col-md-8 py-2">
                        <h4 className="text-primary mb-1">Client Name</h4>
                        <small className="text-uppercase">Profession</small>
                      </div>
                    </div>

                    <div className="p-3 mx-4 my-2">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card px-1 shadow">
                  <div className="card-body">
                    <div className="row border-bottom pb-4">
                      <div className="col-md-4">
                        <img
                          className="img-fluid rounded ms-4 me-2 mt-2"
                          src={ImgTestimonial4}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="col-md-8 py-2">
                        <h4 className="text-primary mb-1">Client Name</h4>
                        <small className="text-uppercase">Profession</small>
                      </div>
                    </div>

                    <div className="p-3 mx-4 my-2">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          {/* <Carousel data-bs-theme="dark" className='my-5 wow fadeInUp'
        data-wow-delay="0.6s">
              
              <Carousel.Item alt="First slide" className='align-items-center pt-5 pb-4 px-5'>
                <div className='row'>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow'style={{backgroundColor:"#EEF9FF"}} >
                      <div className='card-body' >
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial1}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow' >
                      <div className='card-body' style={{ minHeight: "200px" }}>
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial2}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow'style={{backgroundColor:"#EEF9FF"}} >
                      <div className='card-body' style={{ minHeight: "200px" }}>
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial3}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow' >
                      <div className='card-body' style={{ minHeight: "200px" }}>
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial4}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                
       
              </Carousel.Item>
              <Carousel.Item alt="Second slide" className='align-items-center pt-5 pb-4 px-5'>
                <div className='row'>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow'style={{backgroundColor:"#EEF9FF"}} >
                      <div className='card-body' >
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial1}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow' >
                      <div className='card-body' style={{ minHeight: "200px" }}>
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial2}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow'style={{backgroundColor:"#EEF9FF"}} >
                      <div className='card-body' style={{ minHeight: "200px" }}>
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial3}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3  p-0'>
                    <div className='card px-1 shadow' >
                      <div className='card-body' style={{ minHeight: "200px" }}>
                        <div className='row border-bottom pb-4'>
                          <div className='col-md-4'>
                            <img
                                className="img-fluid rounded"
                                            src={ ImgTestimonial4}
                                style={{ width: "60px", height: "60px" }}
                              />
                          </div>
                          <div className='col-md-8'>
                             <h4 className="text-primary mb-1">Client Name</h4>
                              <small className="text-uppercase">Profession</small>
                          </div>
                        </div>

                        <div className="pt-2 pb-2 px-1">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </div>
                         
                       
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                
       
              </Carousel.Item>
             
              
             

                
      
    </Carousel> */}
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Service;
