import './case-studies.css'
function CaseStudies() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="/">
          <span className="mark">
            <b>i</b>
            <i>◆</i>
          </span>
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#">Blog</a>
          <a className="active" href="/case-studies">
            Case Studies
          </a>
          <a href="/about">About Us</a>
          <a href="#">Contact</a>
          <a className="start" href="#">
            Get Started
          </a>
        </nav>
      </header>

      <section className="hero">
        <span className="tag">Case Studies</span>

        <h1>Our Work &amp; Case Studies</h1>

        <p>
          We’re building digital experiences that solve real business
          challenges and
          <br />
          deliver measurable results.
        </p>
      </section>

      <section className="coming">
        <div className="coming-card">
          <div className="case-icon">
            <i className="fa-regular fa-image"></i>
          </div>

          <h2>Case study coming soon</h2>

          <p>
            We’re currently partnering with businesses to create
            <br />
            impactful digital experiences. Check back soon to
            <br />
            explore detailed project success stories.
          </p>

          <a className="button" href="#">
            Become our first case study
          </a>
        </div>
      </section>

      <section className="future">
        <span className="section-tag">Future impact</span>

        <h2>How future case studies will look</h2>

        <div className="future-card">
          <div className="case-icon">
            <i className="fa-regular fa-image"></i>
          </div>
        </div>

        <div className="feature-grid">
          <div className="feature">
            <i className="fa-solid fa-chart-line"></i>
            <span>Business growth</span>
          </div>

          <div className="feature">
            <i className="fa-solid fa-bullseye"></i>
            <span>Clear outcomes</span>
          </div>

          <div className="feature">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <span>Measurable results</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="brand-col">
            <div className="footer-logo">
              <span className="mark light">
                <b>i</b>
                <i>◆</i>
              </span>
              <strong>infiniq</strong>
            </div>

            <p>
              Designing digital products, websites, and
              <br />
              marketing systems that help modern
              <br />
              businesses grow with confidence.
            </p>

            <small>CONTACT</small>

            <p>+91 99408 09952</p>
            <p>infiniqstudios@gmail.com</p>

            <a className="touch" href="#">
              Get in Touch
            </a>

            <div className="social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>

          <div>
            <h4>COMPANY</h4>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="#">Blog</a>
            <a href="/case-studies">Case Study</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>DEVELOPMENT</h4>
            <a href="#">Website Development</a>
            <a href="#">E-commerce Development</a>
            <a href="#">Web Application Development</a>
            <a href="#">Mobile App Development</a>
            <a href="#">Maintenance &amp; Support</a>
          </div>

          <div>
            <h4>MARKETING</h4>
            <a href="#">Digital Marketing</a>
            <a href="#">Search Engine Optimization</a>
            <a href="#">Social Media Marketing</a>
            <a href="#">Performance Marketing</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Infiniq Studios. All rights reserved.</span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default CaseStudies