import { useState } from 'react'
import './assets/Blog.css'

function Blog() {
  const [menuOpen, setMenuOpen] = useState(false)

 return (
  <div className="blog-layout">
      {/* ================= NAVBAR ================= */}
      <header className="header">
        <nav className="nav">

          <a className="logo" href="/">
            <span className="mark">
              <i></i>
              <b></b>
            </span>
            <strong>infiniq</strong>
          </a>

          <div
            className="links"
            style={{ display: menuOpen ? 'flex' : undefined }}
          >
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a className="active" href="/blog">Blog</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a className="green-btn" href="/contact">
              Get Started
            </a>
          </div>

          <button
            className="hamb"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </nav>
      </header>


      {/* ================= BLOG HERO ================= */}
      <section className="blog-hero">

        <div className="blog-hero-content">

          <span className="blog-label">
            Our Blog
          </span>

          <h1>
            Insights &amp; Resources
          </h1>

          <p>
            Practical writing from the people who ship. No fluff, no
            platitudes — just what’s working.
          </p>

        </div>

      </section>


      {/* ================= BLOG CONTENT ================= */}
      <main className="blog-page">

        {/* Search */}
        <div className="blog-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search articles..."
          />
        </div>


        {/* Categories */}
        <div className="blog-filters">

          <button className="active">
            All
          </button>

          <button>
            Website
          </button>

          <button>
            Marketing
          </button>

          <button>
            AI
          </button>

          <button>
            Business
          </button>

          <button>
            Design
          </button>

          <button>
            Development
          </button>

        </div>


        {/* Featured Article */}
        <h2>
          Featured article
        </h2>

        <article className="featured-blog">

          <div className="featured-image"></div>

          <div className="featured-content">

            <div className="blog-meta">
              <span className="blog-tag">
                Startup
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              MVP in 6 weeks: an engineering guide
            </h3>

            <p>
              A repeatable process for shipping software that solves real
              problems, fast.
            </p>

            <a href="#">
              Read article ›
            </a>

          </div>

        </article>


        {/* Latest Articles */}
        <h2 className="latest-heading">
          Latest articles
        </h2>

        <div className="blog-grid">

          {/* Card 1 */}
          <article className="blog-card">

            <div className="blog-card-image pink"></div>

            <div className="blog-meta">
              <span className="blog-tag">
                Development
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              Building websites that convert: a 2026 playbook
            </h3>

            <p>
              The frameworks, patterns, and psychology behind pages that
              actually turn visitors into customers.
            </p>

            <a href="#">
              Read article ›
            </a>

          </article>


          {/* Card 2 */}
          <article className="blog-card">

            <div className="blog-card-image green"></div>

            <div className="blog-meta">
              <span className="blog-tag">
                SEO
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              Technical SEO: what still matters in 2026
            </h3>

            <p>
              Core Web Vitals, structured data, and the fundamentals
              search engines quietly reward.
            </p>

            <a href="#">
              Read article ›
            </a>

          </article>


          {/* Card 3 */}
          <article className="blog-card">

            <div className="blog-card-image blue"></div>

            <div className="blog-meta">
              <span className="blog-tag">
                UI/UX
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              Design systems for small team
            </h3>

            <p>
              How to build a design system that scales without eating
              your product roadmap.
            </p>

            <a href="#">
              Read article ›
            </a>

          </article>


          {/* Card 4 */}
          <article className="blog-card">

            <div className="blog-card-image lavender"></div>

            <div className="blog-meta">
              <span className="blog-tag">
                Marketing
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              Full-funnel marketing on a startup budget
            </h3>

            <p>
              Channels, sequencing, and the traps most young companies
              fall into.
            </p>

            <a href="#">
              Read article ›
            </a>

          </article>


          {/* Card 5 */}
          <article className="blog-card">

            <div className="blog-card-image sky"></div>

            <div className="blog-meta">
              <span className="blog-tag">
                AI
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              Where AI actually helps digital teams
            </h3>

            <p>
              Practical AI workflows we use across design, code, and
              marketing.
            </p>

            <a href="#">
              Read article ›
            </a>

          </article>


          {/* Card 6 */}
          <article className="blog-card">

            <div className="blog-card-image violet"></div>

            <div className="blog-meta">
              <span className="blog-tag">
                Business
              </span>

              <span>
                April 2026
              </span>
            </div>

            <h3>
              Pricing web projects: fixed vs retainer
            </h3>

            <p>
              A repeatable process for shipping software that solves
              real problems, fast.
            </p>

            <a href="#">
              Read article ›
            </a>

          </article>

        </div>

      </main>


      {/* ================= NEWSLETTER ================= */}
      <section className="blog-newsletter">

        <div className="newsletter-icon">
          ▣
        </div>

        <h2>
          Get insights in your inbox.
        </h2>

        <p>
          One thoughtful email a month. No spam, ever.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="your@email.com"
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-grid">

          {/* About */}
          <div className="about">

            <a className="logo light" href="/">
              <span className="mark">
                <i></i>
                <b></b>
              </span>

              <strong>
                infiniq
              </strong>
            </a>

            <p>
              Designing digital products, websites, and
              marketing systems that help modern
              businesses grow with confidence.
            </p>

            <hr />

            <small>
              CONTACT
            </small>

            <p>
              +91 99468 09952
            </p>

            <p>
              infiniqstudio@gmail.com
            </p>

            <a
              className="green-btn"
              href="/contact"
            >
              Get in Touch
            </a>

            <div className="social">
              ●　◎　𝕏　in
            </div>

          </div>


          {/* Company */}
          <div>

            <small>
              COMPANY
            </small>

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


          {/* Development */}
          <div>

            <small>
              DEVELOPMENT
            </small>

            <a>
              Website Development
            </a>

            <a>
              E-commerce Development
            </a>

            <a>
              Web Application Development
            </a>

            <a>
              Mobile App Development
            </a>

            <a>
              Maintenance &amp; Support
            </a>

          </div>


          {/* Marketing */}
          <div>

            <small>
              MARKETING
            </small>

            <a>
              Digital Marketing
            </a>

            <a>
              Search Engine Optimization
            </a>

            <a>
              Social Media Marketing
            </a>

            <a>
              Performance Marketing
            </a>

          </div>

        </div>


        <div className="bottom">

          <span>
            © 2026 Infiniq. All rights reserved.
          </span>

          <span>
            Privacy Policy　 Terms of Service　 Cookie Policy
          </span>

        </div>

      </footer>

    </div>
  )
}

export default Blog