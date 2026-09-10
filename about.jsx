import './about.css'

function About() {
  return (
    <>
      <header className="navbar">
        <a className="brand" href="/">
          <span className="brand-icon">
            <b>i</b>
            <i>◆</i>
          </span>
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="#">Blog</a>
          <a href="#">Case Studies</a>
          <a className="active" href="/about">About Us</a>
          <a href="contact">Contact</a>
          <a className="start" href="contact">Get Started</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <span className="tag">About Us</span>

        <h1>About Infiniq Studios</h1>

        <p>
          Infiniq Studios is a digital design and technology company that helps
          businesses build a strong online
          <br />
          presence through modern UI/UX design, website development, web
          applications, and digital solutions. We
          <br />
          combine creativity, strategy, and technology to create digital
          experiences that are user-focused, visually
          <br />
          engaging, and built to support long-term business growth.
        </p>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="story-copy">
          <span className="tag">Our Story</span>

          <h2>
            Started with a vision to help businesses win
            <br />
            online.
          </h2>

          <p>
            Every business starts with an idea, and Infiniq Studios started
            with a simple belief — great digital experiences should be
            accessible to every business, not just large enterprises.
          </p>

          <p>
            We founded Infiniq Studios with a vision to help startups,
            entrepreneurs, and growing businesses transform their ideas into
            professional digital products. Many businesses struggle with
            outdated websites, poor user experience, and digital solutions
            that fail to generate real business results.
          </p>

          <p>
            Instead of simply designing websites, we focus on understanding
            each client's goals, audience, and challenges. This allows us to
            create solutions that not only look modern but also improve
            customer experience, strengthen brand identity, and support
            business growth.
          </p>

          <p>
            At Infiniq Studios, every project is treated as a long-term
            partnership. Our success is measured by the success of our
            clients.
          </p>
        </div>

        <div className="story-image"></div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision">
        <div className="vision-grid">
          <article>
            <h3>Our Vision</h3>

            <p>
              Our vision is to become a trusted digital solutions partner for
              businesses across India and beyond, recognized for creativity,
              innovation, quality, and lasting client relationships. We aim to
              build digital products that inspire growth, solve real business
              challenges, and create meaningful opportunities for users.
            </p>
          </article>

          <article>
            <h3>Our Mission</h3>

            <p>
              Our mission is to empower businesses with innovative,
              user-centric, and scalable digital solutions that help them grow
              confidently in an ever-evolving digital world. We strive to
              deliver exceptional quality, transparent collaboration, and
              measurable value in every project we undertake.
            </p>
          </article>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <span className="section-tag">Core values</span>

        <h2>
          The principles that drive
          <br />
          every project we deliver.
        </h2>

        <div className="value-grid">
          <article>
            <div className="vicon">💡</div>
            <h3>Innovation</h3>
            <p>
              We continuously explore new ideas, technologies, and creative
              approaches to build modern digital experiences.
            </p>
          </article>

          <article>
            <div className="vicon">🏆</div>
            <h3>Quality</h3>
            <p>
              We believe every project deserves attention to detail, clear
              execution, and high standards from start to finish.
            </p>
          </article>

          <article>
            <div className="vicon">👁</div>
            <h3>Transparency</h3>
            <p>
              We communicate openly, provide honest guidance, and keep our
              clients informed throughout every stage of the project.
            </p>
          </article>

          <article>
            <div className="vicon">🤝</div>
            <h3>Partnership</h3>
            <p>
              We work as an extension of our clients' teams, building
              long-term relationships based on trust and shared success.
            </p>
          </article>

          <article>
            <div className="vicon">📖</div>
            <h3>Continuous Learning</h3>
            <p>
              Technology evolves every day, and so do we. We continuously learn
              and adapt to deliver future-ready digital solutions.
            </p>
          </article>

          <article>
            <div className="vicon">😊</div>
            <h3>Customer Success</h3>
            <p>
              Our clients' growth is our greatest achievement. Every solution
              we build is designed to create measurable business value.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <span>Ready to Start?</span>

        <h2>
          Let's Build Something Amazing
          <br />
          Together
        </h2>

        <p>
          Ready to transform your digital presence? Get in touch with us today
          <br />
          and let's discuss how we can help you achieve your goals.
        </p>

        <div className="cta-buttons">
          <a href="#contact">
            Get Free Consultation <b>→</b>
          </a>

          <a href="/services">View Our Services</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-icon">
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

            <a className="touch" href="#contact">
              Get in Touch
            </a>

            <div className="social">
              <span>f</span>
              <span>◎</span>
              <span>𝕏</span>
              <span>in</span>
            </div>
          </div>

          <div>
            <h4>COMPANY</h4>
            <a>About Us</a>
            <a href="/services">Services</a>
            <a>Blog</a>
            <a>Case Study</a>
            <a>Contact</a>
          </div>

          <div>
            <h4>DEVELOPMENT</h4>
            <a>Website Development</a>
            <a>E-commerce Development</a>
            <a>Web Application Development</a>
            <a>Mobile App Development</a>
            <a>Maintenance &amp; Support</a>
          </div>

          <div>
            <h4>MARKETING</h4>
            <a>Digital Marketing</a>
            <a>Search Engine Optimization</a>
            <a>Social Media Marketing</a>
            <a>Performance Marketing</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Infiniq Studios. All rights reserved.</span>

          <div>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default About