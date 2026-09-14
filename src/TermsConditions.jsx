import './TermsConditions.css'
import logoPng from './assets/logo.png'

function TermsConditions() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="/">
          <img src={logoPng} alt="Infiniq Logo" className="logo-img" />
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#">Blog</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/contact" className="get-started">Get Started</a>
        </nav>
      </header>

      <section className="terms-hero">
        <h1>Terms &amp; Conditions</h1>
      </section>

      <main className="terms-content">
        <section className="terms-section">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing the Infiniq Studios website or using our services,
            you agree to these Terms &amp; Conditions.
          </p>
        </section>

        <section className="terms-section">
          <h2>Services</h2>
          <p>Infiniq Studios provides services including:</p>
          <ul>
            <li>UI/UX Design</li>
            <li>Website Development</li>
            <li>Web Applications</li>
            <li>Mobile Applications</li>
            <li>Branding &amp; Graphic Design</li>
            <li>SEO &amp; Digital Marketing</li>
          </ul>
          <p>
            The scope, pricing, deliverables, and timelines for each project
            are defined in the respective project proposal or agreement.
          </p>
        </section>

        <section className="terms-section">
          <h2>Intellectual Property</h2>
          <p>Unless otherwise agreed in writing:</p>
          <ul>
            <li>
              All website content, branding, graphics, and source materials
              owned by Infiniq Studios remain our intellectual property.
            </li>
            <li>
              Client ownership of project deliverables is governed by the
              signed project agreement.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Payments</h2>
          <p>Payments must be made according to the agreed project schedule.</p>
          <p>
            Failure to make payments on time may result in suspension or delay
            of project work until outstanding invoices are cleared.
          </p>
        </section>

        <section className="terms-section">
          <h2>Limitation of Liability</h2>
          <p>
            We provide our services using reasonable professional skill and
            care. To the maximum extent permitted by law, our liability is
            limited to the fees paid for the specific service provided.
          </p>
        </section>

        <section className="terms-section">
          <h2>Project Termination</h2>
          <p>
            Either party may terminate a project according to the terms stated
            in the project agreement.
          </p>
        </section>

        <section className="terms-section">
          <h2>Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by the applicable
            laws of India.
          </p>
        </section>

        <section className="terms-section contact-section">
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{' '}
            <a href="mailto:infiniqstudios@gmail.com">
              infiniqstudios@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a className="footer-logo" href="/">
              <img src={logoPng} alt="Infiniq Logo" className="footer-logo-img" />
            </a>

            <p className="footer-description">
              Designing digital products, websites, and
              <br />
              marketing systems that help modern
              <br />
              businesses grow with confidence.
            </p>

            <div className="contact-label">CONTACT</div>
            <p className="contact-detail">+91 99408 09952</p>
            <p className="contact-detail">infiniqstudios@gmail.com</p>

            <a href="/contact" className="touch-btn">
              Get in Touch
            </a>

            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="#">Blog</a>
            <a href="/case-studies">Case Study</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>DEVELOPMENT</h3>
            <a href="#">Website Development</a>
            <a href="#">E-commerce Development</a>
            <a href="#">Web Application Development</a>
            <a href="#">Mobile App Development</a>
            <a href="#">Maintenance &amp; Support</a>
          </div>

          <div className="footer-column">
            <h3>MARKETING</h3>
            <a href="#">Digital Marketing</a>
            <a href="#">Search Engine Optimization</a>
            <a href="#">Social Media Marketing</a>
            <a href="#">Performance Marketing</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Infiniq Studios. All rights reserved.</p>

          <div className="legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default TermsConditions