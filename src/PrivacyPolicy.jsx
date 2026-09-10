import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <span>i</span>
            <span>◆</span>
          </div>
          <span>infiniq</span>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#">Blog</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/contact" className="get-started">
            Get Started
          </a>
        </nav>
      </header>

    <section className="privacy-hero">
        <h1>Privacy Policy</h1>
      </section>

      <main className="privacy-content">
        <section className="privacy-section">
          <h2>Overview</h2>
          <p>
            This Privacy Policy explains how Infiniq Studios ("we", "our", or
            "us") collects, uses, stores, and protects your personal
            information when you visit our website or use our services.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <p>We may collect:</p>

          <ul>
            <li>
              Personal information you voluntarily provide, including your
              name, email address, phone number, company name, and project
              requirements.
            </li>
            <li>
              Technical information such as your IP address, browser type,
              device information, pages visited, and website usage data.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>

          <ul>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Deliver our design, development, and digital services.</li>
            <li>
              Improve our website, user experience, and service quality.
            </li>
            <li>Send important service-related communications.</li>
            <li>
              Send marketing updates only when you have provided your consent.
            </li>
          </ul>

          <p>
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information Sharing</h2>
          <p>We may share your information only:</p>

          <ul>
            <li>
              With trusted service providers who assist in operating our
              business.
            </li>
            <li>When required by applicable law or legal process.</li>
          </ul>

          <p>To protect our legal rights and business interests.</p>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>

          <p>
            We implement reasonable technical and organizational security
            measures, including secure hosting and encrypted data transmission
            where applicable. While we strive to protect your information, no
            online system can guarantee absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>

          <ul>
            <li>You may request to:</li>
            <li className="nested">Access your personal information.</li>
            <li className="nested">Correct inaccurate information.</li>
            <li className="nested">
              Delete your personal information where legally permitted.
            </li>
          </ul>

          <p>
            For any privacy-related request, contact us using the email below.
          </p>
        </section>

        <section className="privacy-section contact-section">
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
            <div className="footer-logo">
              <div className="logo-icon">
                <span>i</span>
                <span>◆</span>
              </div>
              <span>infiniq</span>
            </div>

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
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
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

export default PrivacyPolicy