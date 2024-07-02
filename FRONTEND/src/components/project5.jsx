import React from 'react';
import "../css/projects.css";
function Project5() {
  return (
      <section className='projectn'>
            <div className="project">
            <div className="project-container">
          <h1 className="heading-primary-project">MY PORTFOLIO</h1>
          <div className="profile-info-project">
            <p className="text-primary-project">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="button-container">
          <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/MY-PORTFOLIO.git'>PROJECT LINK</a></li>
          </div>
        </div>
            </div>
            <div className='project-n-container'>
                  <div className='project-details-n-container'>
                        <div className='project-details-n-container-img'>
                              <img src='/PROYECTO-PORTFOLIO.png'  alt='Imagen de Proyecto 4'/>
                        </div>
                        <div className='project-details-n-container-description-main'>
                              <div className='project-details-n-container-description'>
                                    <h2 className='project-details-n-container-description-title'>Project Description</h2>
                                    <p className="project-details-n-container-description-p">
                                    I did this project with the idea of being able to show who I am and what I do.
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    In this project, I focused on applying all my previous knowledge, but without leaving aside the main idea, which was <strong className='keyword'>to talk about myself and my projects.</strong>
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    It is a landing page, where you can navigate and see about each of the projects I carried out, and how I carried them out. It also has the contact part, in which there is a form that,
                                    by filling it out and sending it, will reach my email and I will immediately contact you
                                    </p>
                              </div>
                              <div className='project-details-tools-used'>
                              <h2 className='project-details-n-container-description-title'>Tools Used</h2>
                              <div className="skills">
                                    <div className="skills-skill">HTML</div>
                                    <div className="skills-skill">CSS</div>
                                    <div className="skills-skill">SASS</div>
                                    <div className="skills-skill">JavaScript</div>
                                    <div className="skills-skill">Responsive Desing</div>
                                    <div className="skills-skill">Advanced Express</div>
                                    <div className="skills-skill">React</div>
                                    <div className="skills-skill">UI</div>
                                    <div className="skills-skill">Dotenv</div>
                                    <div className="skills-skill">Nodemailer</div>
                                    <div className="skills-skill">Cors</div>
                                    <div className="skills-skill">Axios</div>
                                    <div className="skills-skill">Node.js</div>
                              </div>
                              </div>
                              <div className='project-details-links'>
                              <h2 className='project-details-n-container-description-title'>See Live</h2>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/MY-PORTFOLIO.git'>PROJECT LINK</a></li>
                              <li className="button-primary-project" ><a rel='noreferrer' href='/'>HOME</a></li>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
  );
}

export default Project5;
