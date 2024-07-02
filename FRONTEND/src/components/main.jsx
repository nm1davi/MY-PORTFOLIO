import React, { useState } from "react";
import "../css/main.css";
import proyectos from "../docs/projects.json";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Main() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://backend-portfolio-75uz.onrender.com/api/send-mail', formData)
      .then((response) => {
        MySwal.fire({
          title: 'Email sent successfully',
          text: 'Thanks for contacting me. I will answer you as soon as possible.',
          icon: 'success',
          confirmButtonColor: '#00315D',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-button'
          }
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        MySwal.fire({
          title: 'Error sending email',
          text: 'Please try again later.',
          icon: 'error',
          confirmButtonColor: '#00315D',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-button'
          }
        });
        console.error(error);
      });
  };

  const allProyects = (proyectos) => {
    return (
      proyectos &&
      proyectos.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        img: p.img,
      }))
    );
  };

  const projectList = allProyects(proyectos) || [];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-container">
      <section id="me" className="me">
        <div className="profile-container">
          <h1 className="heading-primary">HI, I'M NICOLAS DAVI</h1>
          <div className="profile-info">
            <p className="text-primary">
              I am a Full Stack developer focused on designing and managing web sites and applications.
              I am passionate about creating effective and attractive solutions that really make a difference.
            </p>
          </div>
          <div className="button-container">
            <li className="button-primary" onClick={() => scrollToSection("projects")}>PROJECTS</li>
          </div>
        </div>
        <div className="social-container">
          <ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/nicolas-davi"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </ul>
          <ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/nm1davi"
            >
              <i className="bi bi-github"></i>
            </a>
          </ul>
          <ul>
            <a href="/curriculum">
              <i className="bi bi-person-square"></i>
            </a>
          </ul>
        </div>
      </section>
      <section id="about" className="about-me">
        <div className="about-container">
          <h2>
            <span className="heading-about">ABOUT-ME</span>
            <span className="sub-about">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
        </div>
        <div className="about-description">
          <div className="about-description-main">
            <h3>Get to know me!</h3>
            <div className="about-description-main-details">
              <p className="about-description-main-details-para">
                I am a <strong>Full Stack Developer</strong>, dedicated to creating and managing the
                frontend and backend of websites and applications, ensuring the best
                user experience. Check out some of my work in the <strong>Projects</strong> section.
              </p>
            </div>
            <div className="about-description-main-details">
              <p className="about-description-main-details-para">
              I am <strong>OPEN TO JOB</strong>  opportunities where I can contribute, learn and grow. If you have any opportunities
              that match my skills and experience, please do not hesitate to contact me. You can also find me on {" "}
                <a
                  className=""
                  rel="noreferrer"
                  href="https://linkedin.com/in/nicolas-davi"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                or {" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/nm1davi"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="about-description-main-details-button">
              <li className="button-seccondary" onClick={() => scrollToSection("contact")}>CONTACT</li>
            </div>
          </div>
          <div className="about-description-skills">
            <h3>My Skills</h3>
            <div className="skills">
              <div className="skills-skill">React</div>
              <div className="skills-skill">HTML</div>
              <div className="skills-skill">Backend</div>
              <div className="skills-skill">Frontend</div>
              <div className="skills-skill">CSS</div>
              <div className="skills-skill">Sass</div>
              <div className="skills-skill">Node.js</div>
              <div className="skills-skill">GitHub</div>
              <div className="skills-skill">JavaScript</div>
              <div className="skills-skill">FullStack</div>
              <div className="skills-skill">Responsive Design</div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="about-container">
          <h2>
            <span className="heading-about">PROJECTS</span>
            <span className="sub-about">
              Here you will find some of the personal projects I created
            </span>
          </h2>
          {projectList.map((proyecto, index) => (
            <div className="projects-container" key={index}>
              <div className="projects-img">
                <img src={proyecto.img} alt={proyecto.name} />
              </div>
              <div className="projects-description">
                <h3>{proyecto.name}</h3>
                <p>{proyecto.description}</p>
                <Link target="_blank" to={`/project${proyecto.id}`} className="button-projects">
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="about-container">
          <h2>
            <span className="heading-about">CONTACT</span>
            <span className="sub-about">
            If you want to contact me, do not hesitate, fill out the form with your information and I will contact you as soon as possible
            </span>
          </h2>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact-form-input"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  className="contact-form-input"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Message"
                  className="contact-form-input"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  spellCheck="false"
                />
              </div>
              <button type="submit" className="button-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
