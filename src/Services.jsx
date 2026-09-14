import { useState } from 'react'
import './services.css'
import logoPng from './assets/logo.png'

function Services() {
  const [formStatus, setFormStatus] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="site-header">
        <nav className="nav">

          <a className="brand" href="/">
            <img src={logoPng} alt="Infiniq Logo" className="logo-img" />
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a className="active" href="/services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a className="nav-cta" href="#contact">
              Get Started
            </a>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </nav>
      </header>


      <main>

        {/* ================= HERO ================= */}
        <section className="services-hero" id="services">

          <div className="pill">
            Our Services
          </div>

          <h1>
            Digital solutions built for
            <br />
            business growth.
          </h1>

          <p>
            One studio for design, engineering, and marketing — so every
            discipline
            <br />
            compounds instead of competing.
          </p>

          <div className="hero-tags">
            <span>Development</span>
            <span>Digital Marketing</span>
            <span>Coming Soon</span>
          </div>

        </section>


        {/* =================================================
            DEVELOPMENT
        ================================================= */}

        <section className="services-section">

          <h2 className="section-title">
            Development
          </h2>


          {/* WEBSITE DEVELOPMENT */}
          <article className="service-card blue">

            <div className="service-copy">

              <div className="service-icon">
                ◉
              </div>

              <h2>
                Website Development
              </h2>

              <p>
                Craft responsive, high-performing websites that
                strengthen your online presence, enhance user
                experience, and help your business grow. We build
                corporate websites, business websites, landing
                pages, portfolio websites, and custom web solutions
                tailored to your brand and goals.
              </p>

              <ul>
                <li>Custom Responsive Design</li>
                <li>Fast Loading Performance</li>
                <li>SEO-Friendly Structure</li>
                <li>Secure &amp; Scalable Development</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>


            <div className="process-box">

              <div className="process-item">
                Discovery &amp; Planning
              </div>

              <div className="process-item">
                UI/UX Design &amp; Prototyping
              </div>

              <div className="process-item">
                Development &amp; Integration
              </div>

              <div className="process-item">
                Testing &amp; Launch
              </div>

            </div>

          </article>


          {/* E-COMMERCE DEVELOPMENT */}
          <article className="service-card reverse orange">

            <div className="process-box">

              <div className="process-item">
                Store Planning
              </div>

              <div className="process-item">
                UI/UX Design
              </div>

              <div className="process-item">
                Development &amp; Integration
              </div>

              <div className="process-item">
                Launch &amp; Optimization
              </div>

            </div>


            <div className="service-copy">

              <div className="service-icon">
                ◌
              </div>

              <h2>
                E-commerce Development
              </h2>

              <p>
                Build powerful online stores with secure payments,
                seamless shopping experiences, and tools that help
                your business grow.
              </p>

              <ul>
                <li>Secure Payment Integration</li>
                <li>Mobile-Optimized Shopping</li>
                <li>Inventory &amp; Order Management</li>
                <li>Sales Growth Optimization</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>

          </article>


          {/* WEB APPLICATION DEVELOPMENT */}
          <article className="service-card green">

            <div className="service-copy">

              <div className="service-icon">
                ▦
              </div>

              <h2>
                Web Application Development
              </h2>

              <p>
                Develop custom web applications — SaaS platforms,
                dashboards, ERP, CRM — that streamline operations,
                automate workflows, and improve business productivity.
              </p>

              <ul>
                <li>Custom Business Solutions</li>
                <li>Secure Architecture</li>
                <li>Scalable Platform</li>
                <li>Workflow Automation</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>


            <div className="process-box">

              <div className="process-item">
                Requirement Analysis
              </div>

              <div className="process-item">
                System Architecture
              </div>

              <div className="process-item">
                Development &amp; Integration
              </div>

              <div className="process-item">
                Deployment &amp; Support
              </div>

            </div>

          </article>


          {/* MOBILE APP DEVELOPMENT */}
          <article className="service-card reverse blue2">

            <div className="process-box">

              <div className="process-item">
                Product Discovery
              </div>

              <div className="process-item">
                UI/UX Design
              </div>

              <div className="process-item">
                App Development
              </div>

              <div className="process-item">
                Testing &amp; Publishing
              </div>

            </div>


            <div className="service-copy">

              <div className="service-icon">
                ▣
              </div>

              <h2>
                Mobile App Development
              </h2>

              <p>
                Design and develop intuitive Android and iOS
                applications that deliver exceptional user
                experiences and business value.
              </p>

              <ul>
                <li>Cross-Platform Support</li>
                <li>Modern UI/UX</li>
                <li>High Performance</li>
                <li>Secure Applications</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>

          </article>


          {/* MAINTENANCE */}
          <article className="service-card blue">

            <div className="service-copy">

              <div className="service-icon">
                ⚙
              </div>

              <h2>
                Maintenance &amp; Support
              </h2>

              <p>
                Keep your digital products secure, updated, and
                optimized with proactive maintenance and continuous
                improvements.
              </p>

              <ul>
                <li>Regular Updates</li>
                <li>Security Monitoring</li>
                <li>Bug Fixes</li>
                <li>Performance Optimization</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>


            <div className="process-box">

              <div className="process-item">
                Monitoring
              </div>

              <div className="process-item">
                Maintenance
              </div>

              <div className="process-item">
                Optimization
              </div>

              <div className="process-item">
                Continuous Support
              </div>

            </div>

          </article>

        </section>


        {/* =================================================
            MARKETING
        ================================================= */}

        <section className="services-section marketing">

          <h2 className="section-title">
            Marketing
          </h2>


          {/* DIGITAL MARKETING */}
          <article className="service-card blue2">

            <div className="service-copy">

              <div className="service-icon">
                ⌁
              </div>

              <h2>
                Digital Marketing
              </h2>

              <p>
                Drive measurable business growth with data-driven
                digital marketing strategies that increase visibility,
                generate leads, and maximize ROI.
              </p>

              <ul>
                <li>Increased Brand Visibility</li>
                <li>Qualified Lead Generation</li>
                <li>Better Customer Engagement</li>
                <li>Measurable ROI</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>


            <div className="process-box">

              <div className="process-item">
                Audit &amp; Analysis
              </div>

              <div className="process-item">
                Strategy Development
              </div>

              <div className="process-item">
                Campaign Execution
              </div>

              <div className="process-item">
                Optimization &amp; Reporting
              </div>

            </div>

          </article>


          {/* SEO */}
          <article className="service-card reverse orange">

            <div className="process-box">

              <div className="process-item">
                SEO Audit
              </div>

              <div className="process-item">
                Keyword Research
              </div>

              <div className="process-item">
                On-Page &amp; Technical Optimization
              </div>

              <div className="process-item">
                Performance Tracking
              </div>

            </div>


            <div className="service-copy">

              <div className="service-icon">
                ⌕
              </div>

              <h2>
                Search Engine Optimization (SEO)
              </h2>

              <p>
                Improve your website's search visibility and attract
                high-quality organic traffic with strategic SEO
                solutions.
              </p>

              <ul>
                <li>Higher Search Rankings</li>
                <li>Organic Traffic Growth</li>
                <li>Quality Leads</li>
                <li>Long-Term Results</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>

          </article>


          {/* SOCIAL MEDIA */}
          <article className="service-card green">

            <div className="service-copy">

              <div className="service-icon">
                ♧
              </div>

              <h2>
                Social Media Marketing
              </h2>

              <p>
                Build meaningful connections with your audience
                through engaging content and strategic social media
                campaigns.
              </p>

              <ul>
                <li>Strong Brand Presence</li>
                <li>Audience Engagement</li>
                <li>Community Growth</li>
                <li>Lead Generation</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>


            <div className="process-box">

              <div className="process-item">
                Audience Research
              </div>

              <div className="process-item">
                Content Strategy
              </div>

              <div className="process-item">
                Campaign Management
              </div>

              <div className="process-item">
                Analytics &amp; Optimization
              </div>

            </div>

          </article>


          {/* PERFORMANCE MARKETING */}
          <article className="service-card reverse blue2">

            <div className="process-box">

              <div className="process-item">
                Campaign Strategy
              </div>

              <div className="process-item">
                Ad Creation
              </div>

              <div className="process-item">
                Launch &amp; Monitoring
              </div>

              <div className="process-item">
                Scale &amp; Optimize
              </div>

            </div>


            <div className="service-copy">

              <div className="service-icon">
                ⌁
              </div>

              <h2>
                Performance Marketing
              </h2>

              <p>
                Launch high-performing advertising campaigns across
                Google and Meta platforms to maximize conversions
                and return on investment.
              </p>

              <ul>
                <li>Immediate Visibility</li>
                <li>Highly Targeted Ads</li>
                <li>Data Collection</li>
                <li>Performance Analysis</li>
              </ul>

              <a className="start" href="#contact">
                Get Started
                <b>›</b>
              </a>

            </div>

          </article>

        </section>


        {/* =================================================
            COMING SOON
        ================================================= */}

        <section className="coming-soon">

          <h2 className="section-title">
            Coming Soon
          </h2>

          <div className="soon-grid">


            {/* GRAPHIC DESIGN */}
            <div className="soon-card blue">

              <div className="service-icon">
                ◉
              </div>

              <h3>
                Graphic Design
              </h3>

              <p>
                Creative visual designs that strengthen your brand
                identity across digital and print media.
              </p>

              <ul>
                <li>Logo Design</li>
                <li>Social Media Creatives</li>
                <li>Brochures &amp; Flyers</li>
                <li>Business Cards</li>
                <li>Packaging Design</li>
                <li>Company Profile Design</li>
                <li>Presentation Design</li>
              </ul>

              <a className="start" href="#contact">
                Notify me
                <b>›</b>
              </a>

            </div>


            {/* BRANDING */}
            <div className="soon-card orange">

              <div className="service-icon">
                ♧
              </div>

              <h3>
                Branding
              </h3>

              <p>
                Build a memorable and consistent brand identity that
                reflects your business values and connects with your
                audience.
              </p>

              <ul>
                <li>Brand Strategy</li>
                <li>Brand Identity</li>
                <li>Brand Guidelines</li>
                <li>Typography System</li>
                <li>Color Palette</li>
                <li>Corporate Branding</li>
                <li>Rebranding</li>
              </ul>

              <a className="start" href="#contact">
                Notify me
                <b>›</b>
              </a>

            </div>


            {/* VIDEO & MOTION */}
            <div className="soon-card green">

              <div className="service-icon">
                ▦
              </div>

              <h3>
                Video &amp; Motion Design
              </h3>

              <p>
                Engaging video content and motion graphics that bring
                your brand and products to life.
              </p>

              <ul>
                <li>Promotional Videos</li>
                <li>Motion Graphics</li>
                <li>Product Videos</li>
                <li>Explainer Videos</li>
                <li>Instagram Reels</li>
                <li>YouTube Video Editing</li>
                <li>Logo Animation</li>
              </ul>

              <a className="start" href="#contact">
                Notify me
                <b>›</b>
              </a>

            </div>

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section className="contact-section" id="contact">

          <div className="contact-intro">

            <small>
              Ready to Start?
            </small>

            <h2>
              Let's Build Something
              <br />
              Amazing Together
            </h2>

            <p>
              Tell us about your project and we'll craft a customized
              <br />
              solution for your business.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              setFormStatus(
                'Thanks! Your message is ready to be sent.'
              )
              e.target.reset()
            }}
          >

            <h3>
              Send us a message
            </h3>

            <label>
              Name *
            </label>

            <input
              required
              type="text"
              placeholder="Your full name"
            />


            <label>
              Email address
            </label>

            <input
              type="email"
              placeholder="your@email.com"
            />


            <label>
              Phone number *
            </label>

            <input
              required
              type="tel"
              placeholder="+91 98765 43210"
            />


            <label>
              Service Category
            </label>

            <select>
              <option>
                Select a Service Category
              </option>

              <option>
                Development
              </option>

              <option>
                Marketing
              </option>

              <option>
                Design
              </option>
            </select>


            <label>
              Specific Service
            </label>

            <select>
              <option>
                Select a Specific Service
              </option>

              <option>
                Website Development
              </option>

              <option>
                SEO
              </option>

              <option>
                Digital Marketing
              </option>
            </select>


            <label>
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Tell us about your project, goals, and requirements"
            ></textarea>


            <button type="submit">
              Send Message
            </button>

            <div
              className="form-status"
              aria-live="polite"
            >
              {formStatus}
            </div>

          </form>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-main">

          {/* ABOUT */}
          <div className="footer-about">

            <a className="brand light" href="/">
              <img src={logoPng} alt="Infiniq Logo" className="footer-logo-img" />
            </a>

            <p>
              We build digital experiences that
              <br />
              help ambitious businesses grow,
              <br />
              scale, and succeed.
            </p>

            <h5>
              CONTACT
            </h5>

            <p>
              +91 98765 43210
              <br />
              hello@infiniq.com
            </p>

            <a
              className="footer-cta"
              href="#contact"
            >
              Get in Touch
            </a>

            <div className="social">
              ◉　◎　𝕏　in
            </div>

          </div>


          {/* COMPANY */}
          <div>

            <h5>
              COMPANY
            </h5>

            <a href="/about">
              About Us
            </a>

            <a href="/services">
              Services
            </a>

            <a href="/blog">
              Blog
            </a>

            <a href="/case-studies">
              Case Study
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>


          {/* DEVELOPMENT */}
          <div>

            <h5>
              DEVELOPMENT
            </h5>

            <a href="/services">
              Website Development
            </a>

            <a href="/services">
              E-commerce Development
            </a>

            <a href="/services">
              Web Application Development
            </a>

            <a href="/services">
              Mobile App Development
            </a>

            <a href="/services">
              Maintenance &amp; Support
            </a>

          </div>


          {/* MARKETING */}
          <div>

            <h5>
              MARKETING
            </h5>

            <a href="/services">
              Digital Marketing
            </a>

            <a href="/services">
              Search Engine Optimization
            </a>

            <a href="/services">
              Social Media Marketing
            </a>

            <a href="/services">
              Performance Marketing
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2025 Infiniq. All rights reserved.
          </span>

          <span>
            <a href="/privacy-policy">
              Privacy Policy
            </a>
            &nbsp;&nbsp;
            <a href="/terms-conditions">
              Terms of Service
            </a>
            &nbsp;&nbsp;
            <a href="/cookie-policy">
              Cookie Policy
            </a>
          </span>

        </div>

      </footer>

    </>
  )
}

export default Services