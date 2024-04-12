import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ImgVendor1 from "./../../assets/img/vendor-1.jpg";
import ImgVendor2 from "./../../assets/img/vendor-2.jpg";
import ImgVendor3 from "./../../assets/img/vendor-3.jpg";
import ImgVendor4 from "./../../assets/img/vendor-4.jpg";
import ImgVendor5 from "./../../assets/img/vendor-5.jpg";
import ImgVendor6 from "./../../assets/img/vendor-6.jpg";
import ImgVendor7 from "./../../assets/img/vendor-7.jpg";
import ImgVendor8 from "./../../assets/img/vendor-8.jpg";
import ImgVendor9 from "./../../assets/img/vendor-9.jpg";

const Vendor = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {/* Vendor Start */}

      <div className="container my-5  wow fadeInUp">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor1} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor2} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor3} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor4} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor5} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor6} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor7} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor8} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div className="card-body">
                      <img className="img-fluid rounded" src={ImgVendor9} />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor End */}
    </>
  );
};

export default Vendor;
