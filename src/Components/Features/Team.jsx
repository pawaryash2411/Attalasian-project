import ImgTeam1 from './../../assets/img/team-1.jpg'
import ImgTeam2 from './../../assets/img/team-2.jpg'
import ImgTeam3 from './../../assets/img/team-3.jpg'



const Team = () => {
  return (
    <>
  <div
    className="container-fluid bg-primary py-5 bg-header"
    style={{ marginBottom: "90px" }}
  >
    <div className="row py-5">
      <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Team Members</h1>
        <a href="" className="h5 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h5 text-white">
          Team Members
        </a>
      </div>
    </div>
  </div>
  {/* Navbar End */}
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(9, 30, 62, .7)" }}
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
          <div className="input-group" style={{ maxWidth: "600px" }}>
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
  {/* Team Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
        <h1 className="mb-0">
          Professional Stuffs Ready to Help Your Business
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={ImgTeam1}  alt="" />
              <div className="team-social">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-instagram fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={ImgTeam2}  alt="" />
              <div className="team-social">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-instagram fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src={ImgTeam3}  alt="" />
              <div className="team-social">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-instagram fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href=""
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

  )
}

export default Team
