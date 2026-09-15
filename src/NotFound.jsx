import './NotFound.css'
import logoPng from './assets/logo.svg'

function NotFound() {
  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="/">
          <img src={logoPng} alt="Infiniq Logo" className="logo-img" />
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="start" href="/contact">
          Get Started
        </a>

        <button className="menu">☰</button>
      </header>

      <main className="error">
        <div className="number">404</div>

        <h1>Oops! Page Not Found</h1>

        <p>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="actions">
          <a className="primary" href="/">
            Back to Home
          </a>

          <a className="secondary" href="/contact">
            Contact Us
          </a>
        </div>

        <a className="sitemap" href="/">
          Or browse our sitemap →
        </a>
      </main>

      <footer>
        <div className="footer-grid">

          <div className="brand">
            <a className="flogo" href="/">
              <img src={logoPng} alt="Infiniq Logo" className="footer-logo-img" />
            </a>

            <p>
              Designing digital products, websites, and marketing systems
              that help modern businesses grow with confidence.
            </p>

            <hr />

            <small>CONTACT</small>
            <p>+91 99408 09952</p>
            <p>infiniqstudios@gmail.com</p>

            <a className="touch" href="/contact">
              Get In Touch
            </a>

            <div className="social">●　◎　𝕏　in</div>
          </div>

          <div>
            <small>COMPANY</small>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/case-studies">Case Study</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <small>DEVELOPMENT</small>
            <a href="#">Website Development</a>
            <a href="#">E-commerce Development</a>
            <a href="#">Web Application Development</a>
            <a href="#">Mobile App Development</a>
            <a href="#">Maintenance &amp; Support</a>
          </div>

          <div>
            <small>MARKETING</small>
            <a href="#">Digital Marketing</a>
            <a href="#">Search Engine Optimization</a>
            <a href="#">Social Media Marketing</a>
            <a href="#">Performance Marketing</a>
          </div>

        </div>

        <div className="bottom">
          <span>© 2026 Infiniq Studios. All rights reserved.</span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NotFound