import './Cookiepolicy.css'
import logoPng from './assets/logo.png'

function CookiePolicy() {
  return (
    <div className="cookie-page">
      <header className="cookie-nav">
        <a className="cookie-logo" href="/">
          <img src={logoPng} alt="Infiniq Logo" className="logo-img" />
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#">Blog</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="cookie-start" href="/contact">
          Get Started
        </a>

        <button className="cookie-menu">☰</button>
      </header>

      <section className="cookie-hero">
        <h1>Cookie Policy</h1>
      </section>

      <main className="cookie-content">
        <section>
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help
            websites remember information, improve performance, and enhance
            your experience.
          </p>
        </section>

        <section>
          <h2>How We Use Cookies</h2>
          <p>We use cookies for purposes such as:</p>
          <ul>
            <li>Ensuring essential website functionality</li>
            <li>Remembering user preferences</li>
            <li>Measuring website performance and usage</li>
            <li>Analyzing website activity and improving the experience</li>
          </ul>
        </section>

        <section>
          <h2>Third-Party Cookies</h2>
          <p>
            Some third-party services may place cookies on your device to
            provide analytics, embedded content, or other functionality.
          </p>
        </section>

        <section>
          <h2>Managing Cookies</h2>
          <p>
            You can control or disable cookies through your browser settings.
            Disabling some cookies may affect how certain parts of the website
            work.
          </p>
        </section>

        <section>
          <h2>Your Choices</h2>
          <p>
            You can choose whether to accept optional cookies and can change
            your browser preferences at any time.
          </p>
        </section>
      </main>

      <footer className="cookie-footer">
        <div className="cookie-footer-grid">
          <div className="cookie-brand">
            <a className="cookie-flogo" href="/">
              <img src={logoPng} alt="Infiniq Logo" className="footer-logo-img" />
            </a>

            <p>
              Designing digital products, websites, and marketing systems that
              help modern businesses grow with confidence.
            </p>

            <hr />

            <small>CONTACT</small>
            <p>+91 99408 09952</p>
            <p>infiniqstudios@gmail.com</p>

            <a className="cookie-touch" href="/contact">
              Get In Touch
            </a>
          </div>

          <div>
            <small>COMPANY</small>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="#">Blog</a>
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
            <a href="#">Analytics &amp; Reporting</a>
            <a href="#">Email Marketing</a>
          </div>
        </div>

        <div className="cookie-bottom">
          <span>© 2026 Infiniq Studios. All rights reserved.</span>

          <div>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CookiePolicy