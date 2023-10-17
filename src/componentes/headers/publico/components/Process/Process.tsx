

export interface ProcessProps {
  prop?: string;
}

export function Process({ prop = 'default value' }: ProcessProps) {
  return (
    <>
      <section className="section" id="process">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h1 className="mb-3 ff-secondary fw-semibold lh-base">How <span className="text-primary">it's work</span> creative jobs &amp; quickly features</h1>
                <p className="text-muted">A creative person has the ability to invent and develop original ideas, especially in the arts. Like so many creative people, he was never satisfied.</p>
              </div>
            </div>
            {/* end col */}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h1 className="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                    <div className="job-icon-effect" />
                    <span>1</span>
                  </h1>
                  <h6 className="fs-17 mb-2">Register Account</h6>
                  <p className="text-muted mb-0 fs-15">First, You need to make a account.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none">
                <div className="card-body p-4">
                  <h1 className="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                    <div className="job-icon-effect" />
                    <span>2</span>
                  </h1>
                  <h6 className="fs-17 mb-2">Create Resume</h6>
                  <p className="text-muted mb-0 fs-15">Create a resume for your job.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none">
                <div className="card-body p-4">
                  <h1 className="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                    <div className="job-icon-effect" />
                    <span>3</span>
                  </h1>
                  <h6 className="fs-17 mb-2">Find Job</h6>
                  <p className="text-muted mb-0 fs-15">Search for your dream jobs from velzon.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none">
                <div className="card-body p-4">
                  <h1 className="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                    <div className="job-icon-effect" />
                    <span>4</span>
                  </h1>
                  <h6 className="fs-17 mb-2">Apply Job</h6>
                  <p className="text-muted mb-0 fs-15">Apply to the company and wait for interview.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>

      <section className="section bg-light" id="categories">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center mb-5">
                <h1 className="mb-3 ff-secondary fw-semibold text-capitalize lh-base">
                  High demand jobs <span className="text-primary">Categories</span>{" "}
                  featured
                </h1>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match you
                  with the right freelancers.
                </p>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-pencil-ruler-2-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">IT &amp; Software</h5>
                  </a>
                  <p className="mb-0 text-muted">1543 Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-airplay-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">Construction / Facilities</h5>
                  </a>
                  <p className="mb-0 text-muted">3241 Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm mb-4 mx-auto position-relative">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-bank-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">Government</h5>
                  </a>
                  <p className="mb-0 text-muted">876 Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-focus-2-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">Marketing &amp; Advertising</h5>
                  </a>
                  <p className="mb-0 text-muted">465 Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-pencil-ruler-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">Education &amp; training</h5>
                  </a>
                  <p className="mb-0 text-muted">105 Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-line-chart-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">Digital Marketing</h5>
                  </a>
                  <p className="mb-0 text-muted">377 Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card shadow-none text-center py-3">
                <div className="card-body py-4">
                  <div className="avatar-sm position-relative mb-4 mx-auto">
                    <div className="job-icon-effect" />
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-briefcase-2-line fs-1" />
                    </div>
                  </div>
                  <a href="#!" className="stretched-link">
                    <h5 className="fs-17 pt-1">Catering &amp; Tourism</h5>
                  </a>
                  <p className="mb-0 text-muted">85 Jobs</p>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>

      <>
        <section className="py-5 bg-primary position-relative">
          <div className="bg-overlay bg-overlay-pattern opacity-50" />
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-sm">
                <div>
                  <h4 className="text-white fw-semibold">
                    Get New Jobs Notification!
                  </h4>
                  <p className="text-white text-opacity-75 mb-0">
                    Subscribe &amp; get all related jobs notification.
                  </p>
                </div>
              </div>
              {/* end col */}
              <div className="col-sm-auto">
                <button className="btn btn-danger" type="button">
                  Subscribe Now <i className="ri-arrow-right-line align-bottom" />
                </button>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end cta */}
        {/* Start footer */}
        <footer className="custom-footer bg-dark py-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt-4">
                <div>
                  <div>
                    <img
                      src="assets/images/logo-light.png"
                      alt="logo light"
                      height={17}
                    />
                  </div>
                  <div className="mt-4 fs-13">
                    <p>Premium Multipurpose Admin &amp; Dashboard Template</p>
                    <p>
                      You can build any type of web application like eCommerce, CRM,
                      CMS, Project management apps, Admin Panels, etc using Velzon.
                    </p>
                    <ul className="list-inline mb-0 footer-social-link">
                      <li className="list-inline-item">
                        <a href="javascript: void(0);" className="avatar-xs d-block">
                          <div className="avatar-title rounded-circle">
                            <i className="ri-facebook-fill" />
                          </div>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript: void(0);" className="avatar-xs d-block">
                          <div className="avatar-title rounded-circle">
                            <i className="ri-github-fill" />
                          </div>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript: void(0);" className="avatar-xs d-block">
                          <div className="avatar-title rounded-circle">
                            <i className="ri-linkedin-fill" />
                          </div>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript: void(0);" className="avatar-xs d-block">
                          <div className="avatar-title rounded-circle">
                            <i className="ri-google-fill" />
                          </div>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript: void(0);" className="avatar-xs d-block">
                          <div className="avatar-title rounded-circle">
                            <i className="ri-dribbble-line" />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 ms-lg-auto">
                <div className="row">
                  <div className="col-sm-4 mt-4">
                    <h5 className="text-white mb-0">Company</h5>
                    <div className="text-muted mt-3">
                      <ul className="list-unstyled ff-secondary footer-list">
                        <li>
                          <a href="pages-profile.html">About Us</a>
                        </li>
                        <li>
                          <a href="pages-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="pages-team.html">Team</a>
                        </li>
                        <li>
                          <a href="pages-pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="pages-timeline.html">Timeline</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-4">
                    <h5 className="text-white mb-0">For Jobs</h5>
                    <div className="text-muted mt-3">
                      <ul className="list-unstyled ff-secondary footer-list">
                        <li>
                          <a href="apps-job-lists.html">Job List</a>
                        </li>
                        <li>
                          <a href="apps-job-application.html">application</a>
                        </li>
                        <li>
                          <a href="apps-job-new.html">New Job</a>
                        </li>
                        <li>
                          <a href="apps-job-companies-lists.html">Company List</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-4">
                    <h5 className="text-white mb-0">Support</h5>
                    <div className="text-muted mt-3">
                      <ul className="list-unstyled ff-secondary footer-list">
                        <li>
                          <a href="pages-faqs.html">FAQ</a>
                        </li>
                        <li>
                          <a href="pages-faqs.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center text-sm-start align-items-center mt-5">
              <div className="col-sm-6">
                <div>
                  <p className="copy-rights mb-0">© Velzon - Themesbrand</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end mt-3 mt-sm-0">
                  <ul className="list-inline mb-0 footer-list gap-4 fs-13">
                    <li className="list-inline-item">
                      <a href="pages-privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="pages-term-conditions.html">Terms &amp; Conditions</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="pages-privacy-policy.html">Security</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/*start back-to-top*/}
        <button

          className="btn btn-info btn-icon landing-back-top"
          id="back-to-top"
        >
          <i className="ri-arrow-up-line" />
        </button>
      </>


    </>);


}
