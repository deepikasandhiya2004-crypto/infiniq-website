import './contact.css'
function Contact() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="/">
          <span className="logo-mark">
            <span>i</span>
            <b>◆</b>
          </span>
        </a>

        <nav>
       <a href="/" className="home-link">Home</a>
<a href="/services" className="services-link">Services</a>
          
         <a className="blog-link">Blog</a>
         <a className="case-studies-link">Case Studies</a>
        <a className="about-us-link">About Us</a>
        <a href="/contact" className="contact-link">Contact</a>
          <a href="/contact" className="get-started">Get Started</a>
        </nav>
      </header>

      <section className="contact-hero">
        <div className="hero-inner">
          <div className="hero-badge">Get In Touch</div>
          <h1>Contact Us</h1>
          <p>
            Ready to grow your business? Let's discuss how we can help you
            achieve your
            <br className="desktop" /> digital goals.
          </p>
        </div>
      </section>

      <section className="connect">
        <div className="connect-grid">
          <div className="left-column">
            <h2>Let's Connect</h2>

            <a className="info-card" href="mailto:infiniqstudios@gmail.com">
              <span className="card-icon">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <span>
                <strong>Email Us</strong>
                <small>infiniqstudios@gmail.com</small>
              </span>
            </a>

            <a className="info-card" href="tel:+919940809952">
              <span className="card-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <span>
                <strong>Call Us</strong>
                <small>+91 99408 09952</small>
              </span>
            </a>

            <div className="info-card">
              <span className="card-icon">
                <i className="fa-regular fa-location-dot"></i>
              </span>
              <span>
                <strong>Location</strong>
                <small>Serving clients worldwide.</small>
              </span>
            </div>

            <div className="response-card">
              <strong>Quick Response Guaranteed</strong>
              <p>
                We respond to all inquiries within 24 hours. Your growth is
                our priority.
              </p>
            </div>
          </div>

          <div className="form-card">
            <h3>Send us a message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! Your message has been submitted.')
                e.target.reset()
              }}
            >
              <label>
                Name<span>*</span>
              </label>
              <input type="text" placeholder="Your full name" required />

              <label>Email address</label>
              <input type="email" placeholder="your@email.com" />

              <label>
                Phone number<span>*</span>
              </label>

              <div className="phone-field">
                <span className="country">
                  <span className="flag">🇮🇳</span> +91
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
                <input type="tel" placeholder="98765 43210" required />
              </div>

              <label>Service Category</label>
              <div className="select-wrap">
                <select defaultValue="">
                  <option value="" disabled>
                    Select a Service Category
                  </option>
                  <option>UI/UX Design</option>
                  <option>Website Development</option>
                  <option>Digital Marketing</option>
                  <option>Mobile App Development</option>
                </select>
              </div>

              <label>Specific Service</label>
              <div className="select-wrap">
                <select defaultValue="">
                  <option value="" disabled>
                    Select a Specific Service
                  </option>
                  <option>Website Development</option>
                  <option>E-commerce Development</option>
                  <option>SEO</option>
                </select>
              </div>

              <label>Message</label>
              <textarea placeholder="Tell us about your project..."></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">
                <span>i</span>
                <b>◆</b>
              </span>
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact