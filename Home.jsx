import { useState } from 'react'
function Home()  {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectIndex, setProjectIndex] = useState(0)
  const [status, setStatus] = useState('')


  return (
    <>
      <header className="header">
        <nav className="nav">
          <a className="logo" href="#home">
            <span className="mark"><i></i><b></b></span>
            <strong>infiniq</strong>
          </a>

         <div
  className="links"
  style={{ display: menuOpen ? 'flex' : undefined }}
>
            <a className="active" href="#home">Home</a>
            <a href="/services">Services</a>
  <a href="/blog">Blog</a>
            <a href="#">Case Studies</a>
            <a href="#">About Us</a>
            <a href="#contact">Contact</a>
            <a className="green-btn" href="#contact">Get Started</a>
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

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <h1>
              <span>Building Digital Experiences</span><br />
              <span>That Drive</span> Business Growth.
            </h1>

            <p>
              We design and develop modern websites, web applications, mobile
              <br className="desktop" />
              apps, and digital marketing solutions that help businesses grow faster.
            </p>

            <div className="hero-buttons">
              <a className="green-btn big" href="#contact">Get Started</a>
              <a className="outline-btn big" href="#contact">Book a demo</a>
            </div>

            <div className="ready">READY TO PARTNER WITH</div>

            <div className="chips">
              <span>Modern Technology</span>
              <span>Creative Design</span>
              <span>Business Focused</span>
              <span>Long-Term Support</span>
            </div>
          </div>

          <div className="stats">
            <div><b>100%</b><small>Client Focus</small></div>
            <div><b>24 hrs</b><small>Response Time</small></div>
            <div><b>Free</b><small>Strategy Session</small></div>
            <div><b>Custom</b><small>Digital Solutions</small></div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="eyebrow">What We Do</div>
          <h2>Everything you need to grow<br />online</h2>
          <p className="sub">
            From strategy to launch and beyond — one team, aligned on your outcomes.
          </p>

          <div className="service-grid">
            {[
              ["neutral", "◎", "Website Development", "Modern, high-performance websites from corporate sites to landing pages built to strengthen your brand and grow your business."],
              ["pink", "▱", "E-commerce Development", "Build powerful online stores with secure payments, seamless shopping experiences, and tools that help your business grow."],
              ["blue", "▦", "Web Application Development", "Develop custom web applications — SaaS platforms, dashboards, ERP, CRM — that streamline operations, automate workflows, and improve business productivity."],
              ["green", "▣", "Mobile App Development", "Design and develop intuitive Android and iOS applications that deliver exceptional user experiences and business value."],
              ["lavender", "⌁", "Digital Marketing", "Drive measurable business growth with data-driven digital marketing strategies that increase visibility, generate leads, and maximize ROI."],
              ["white", "⌕", "SEO", "Improve your website's search visibility and attract high-quality organic traffic with strategic SEO solutions."],
              ["peach", "♧", "Social Media Marketing", "Build meaningful connections with your audience through engaging content and strategic social media campaigns."],
              ["lilac", "⌁", "Performance Marketing", "Launch high-performing advertising campaigns across Google and Meta platforms to maximize conversions and return on investment."],
              ["mint", "◉", "Content Marketing", "Create valuable content that attracts, educates, and converts your target audience while strengthening your brand authority."]
            ].map(([color, icon, title, text]) => (
              <div className={`tile ${color}`} key={title}>
                <span className="tile-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <a className="green-btn view" href="#">View All Services</a>
        </section>

        <section className="partner">
          <div className="eyebrow">Creative Design</div>
          <h2>Your Trusted Partner for Digital Success</h2>
          <p className="sub">
            We help businesses transform ideas into powerful digital experiences through
            <br className="desktop" />
            strategic design, modern development, and long-term partnership.
          </p>

          <div className="value-grid">
            {[
              ["", "♙", "Speed to Launch", "We ship in weeks, not quarters — without cutting corners."],
              ["peach", "♡", "Built to Last", "Modern stacks, clean code, and battle-tested patterns."],
              ["blue", "ϟ", "Performance First", "Core Web Vitals, accessibility, and SEO baked in."],
              ["green", "♧", "Real Collaboration", "Weekly updates and a direct line to your team."],
              ["lavender", "⌁", "Growth Mindset", "We design for the business goal, not the demo."],
              ["neutral", "♡", "Long-Term Partnership", "Support and iteration after launch, not just before."]
            ].map(([color, icon, title, text]) => (
              <div className={`value ${color}`} key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stages">
          <h2>Seven stages, fully visible</h2>

          <div className="stage-track">
            {[
              ["⌕", "", "STAGE 1", "Discover", "We learn your business, audience and constraints before proposing anything."],
              ["▣", "green-t", "STAGE 2", "Strategy", "Sitemaps, scope, milestones and a written plan you approve before work starts."],
              ["◉", "blue-t", "STAGE 3", "Design", "Wireframes then high-fidelity UI, reviewed in fixed rounds."],
              ["▣", "orange-t", "STAGE 4", "Development", "Clean, responsive, accessible build with weekly demos."],
              ["⚙", "", "STAGE 5", "Testing", "Cross-browser, device, performance, accessibility and form testing."],
              ["♙", "", "STAGE 6", "Launch", "Deployment, analytics setup, console and handover training."],
              ["▥", "green-t", "STAGE 7", "Growth Support", "Maintenance, content and SEO work to keep improving after launch."]
            ].map(([icon, iconClass, stage, title, text]) => (
              <div className="stage" key={stage}>
                <span className={`stage-icon ${iconClass}`}>{icon}</span>
                <small>{stage}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="projects">
          <div className="project-intro">
            <div className="eyebrow">Featured Services</div>
            <h2>Where most<br />projects begin</h2>
            <p>These are the services most often selected on each discovery call.</p>
          <div className="arrows">
  <button
    id="prev"
    onClick={() => setProjectIndex(Math.max(0, projectIndex - 1))}
  >
    ‹
  </button>

  <button
    id="next"
    onClick={() => setProjectIndex(Math.min(1, projectIndex + 1))}
  >
    ›
  </button>
              
            </div>
          </div>
<div className="project-window">
  <div
    className="project-list"
    id="projectList"
    style={{
      transform: `translateX(-${projectIndex * 44}%)`,
    }}
  >

              <article className="project active">
                <span>◎</span>
                <h3>Website Development</h3>
                <p>Marketing sites and platforms built for performance, conversion, and long-term maintainability.</p>
                <a href="#contact">Explore service ↗</a>
              </article>

              <article className="project light">
                <span>⌁</span>
                <h3>Digital Marketing</h3>
                <p>Full-funnel campaigns spanning paid, organic, content, and lifecycle marketing.</p>
                <a href="#contact">Explore service ↗</a>
              </article>

              <article className="project light">
                <span>▦</span>
                <h3>Web Application Development</h3>
                <p>Custom software products and business applications built around your workflow.</p>
                <a href="#contact">Explore service ↗</a>
              </article>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="eyebrow">Client Testimonials</div>
          <h2>Trusted by Businesses Across India</h2>
          <p className="sub">
            Real experiences from businesses that partnered with us to design, develop, and scale impactful digital solutions.
          </p>

          <div className="quote-grid">
            <article>
              <div className="quote">”</div>
              <p>“Infiniq Studios transformed our vision into a modern, professional website. Their UI/UX experience and attention to detail exceeded our expectations.”</p>
              <div className="person">
                <b>AB</b>
                <span>
                  <strong>AB. Kishore</strong>
                  <small>Founder</small>
                </span>
              </div>
            </article>

            <article>
              <div className="quote">”</div>
              <p>“From design to development, the entire experience was smooth and professional. We highly recommend Infiniq Studios for businesses looking to build a strong online presence.”</p>
              <div className="person">
                <b>VI</b>
                <span>
                  <strong>Vishali</strong>
                  <small>Chief Marketing Officer</small>
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <small>Ready to Start?</small>
            <h2>Let's Build Something<br />Amazing Together</h2>
            <p>
              Tell us about your project and we'll craft a customized
              <br className="desktop" /> solution for your business.
            </p>
          </div>

          <form id="contactForm">
            <h3>Send us a message</h3>

            <label>Name *</label>
            <input required placeholder="Your full name" />

            <label>Email address</label>
            <input type="email" placeholder="your@email.com" />

            <label>Phone number *</label>
            <input required type="tel" placeholder="+91 98765 43210" />

            <label>Service Category</label>
            <select>
              <option>Select a Service Category</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>

            <label>Specific Service</label>
            <select>
              <option>Select a Specific Service</option>
              <option>Website Development</option>
              <option>Digital Marketing</option>
              <option>SEO</option>
            </select>

            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your project, goals, and requirements"></textarea>

            <button type="submit">Send Message</button>
            <div id="status"></div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="about">
            <a className="logo light">
              <span className="mark"><i></i><b></b></span>
              <strong>infiniq</strong>
            </a>

            <p>
              Designing digital products, websites, and<br />
              marketing systems that help modern<br />
              businesses grow with confidence.
            </p>

            <hr />
            <small>CONTACT</small>
            <p>+91 99468 09952</p>
            <p>infiniqstudio@gmail.com</p>
            <a className="green-btn" href="#contact">Get in Touch</a>
            <div className="social">●　◎　𝕏　in</div>
          </div>

          <div>
            <small>COMPANY</small>
            <a>About Us</a>
            <a>Services</a>
            <a>Blog</a>
            <a>Case Study</a>
            <a>Contact</a>
          </div>

          <div>
            <small>DEVELOPMENT</small>
            <a>Website Development</a>
            <a>E-commerce Development</a>
            <a>Web Application Development</a>
            <a>Mobile App Development</a>
            <a>Maintenance &amp; Support</a>
          </div>

          <div>
            <small>MARKETING</small>
            <a>Digital Marketing</a>
            <a>Search Engine Optimization</a>
            <a>Social Media Marketing</a>
            <a>Performance Marketing</a>
          </div>
        </div>

        <div className="bottom">
          <span>© 2025 Infiniq. All rights reserved.</span>
          <span>Privacy Policy　 Terms of Service　 Cookie Policy</span>
        </div>
      </footer>
    </>
  )
}

export default Home