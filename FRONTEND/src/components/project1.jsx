import React from 'react';
import "../css/projects.css";
function Project1() {
  return (
      <section className='projectn'>
            <div className="project">
            <div className="project-container">
          <h1 className="heading-primary-project">HARDWARE STORE LANDING PAGE</h1>
          <div className="profile-info-project">
            <p className="text-primary-project">
            A Full Stack developer focused on designing and managing web sites and applications.
            </p>
          </div>
          <div className="button-container">
          <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/Desarrollo-Web-Ecommerce.git'>PROJECT LINK</a></li>
          </div>
        </div>
            </div>
            <div className='project-n-container'>
                  <div className='project-details-n-container'>
                        <div className='project-details-n-container-img'>
                              <img src='/PROYECTO-FERRETERIA1.png' alt='Imagen de Proyecto 1'/>
                        </div>
                        <div className='project-details-n-container-description-main'>
                              <div className='project-details-n-container-description'>
                                    <h2 className='project-details-n-container-description-title'>Project Description</h2>
                                    <p className="project-details-n-container-description-p">
                                    This web design was the first project I did, it was a final project that I had to present for the <strong className='keyword'>web development</strong> course
                                    I did at CoderHouse, it was supervised by my teacher and my tutor.
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    In this project I tried to focus more on responsive design and learning HTML than on design in general. I mean the knowledge of the HTML language.
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    It was a very nice project, it awakened in me the desire to continue developing and learning about web development and its tools.
                                    I can say that it was my beginning in the world of development
                                    </p>
                              </div>
                              <div className='project-details-tools-used'>
                              <h2 className='project-details-n-container-description-title'>Tools Used</h2>
                              <div className="skills">
                                    <div className="skills-skill">HTML</div>
                                    <div className="skills-skill">CSS</div>
                                    <div className="skills-skill">Sass</div>
                                    <div className="skills-skill">Responsive Desing</div>
                              </div>
                              </div>
                              <div className='project-details-links'>
                              <h2 className='project-details-n-container-description-title'>See Live</h2>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/Desarrollo-Web-Ecommerce.git'>PROJECT LINK</a></li>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://davihnos.netlify.app'>VIEW PROJECT</a></li>
                              <li className="button-primary-project" ><a rel='noreferrer' href='/'>HOME</a></li>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
  );
}

export default Project1;
