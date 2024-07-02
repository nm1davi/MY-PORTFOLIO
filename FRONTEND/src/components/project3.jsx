import React from 'react';
import "../css/projects.css";
function Project3() {
  return (
      <section className='projectn'>
            <div className="project">
            <div className="project-container">
          <h1 className="heading-primary-project">ECOMMERCE WINE</h1>
          <div className="profile-info-project">
            <p className="text-primary-project">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="button-container">
          <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/REACT-WineEcommerce.git'>PROJECT LINK</a></li>
          </div>
        </div>
            </div>
            <div className='project-n-container'>
                  <div className='project-details-n-container'>
                        <div className='project-details-n-container-img'>
                              <img src='/ECOMMERCE-VINO.png'  alt='Imagen de Proyecto 3'/>
                        </div>
                        <div className='project-details-n-container-description-main'>
                              <div className='project-details-n-container-description'>
                                    <h2 className='project-details-n-container-description-title'>Project Description</h2>
                                    <p className="project-details-n-container-description-p">
                                    Ecommerce Wine it was also a final project for my React course, therefore it was supervised by my professor and course tutor.
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    In this project I focused on the use of <strong className='keyword'>React</strong>, I also consulted with professionals about the design of the website.
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    This page simulates being an Ecommerce, this means that it simulates the purchase of products without putting the buyer's sensitive information at risk at any time.
                                    </p>
                              </div>
                              <div className='project-details-tools-used'>
                              <h2 className='project-details-n-container-description-title'>Tools Used</h2>
                              <div className="skills">
                                    <div className="skills-skill">HTML</div>
                                    <div className="skills-skill">CSS</div>
                                    <div className="skills-skill">JavaScript</div>
                                    <div className="skills-skill">Responsive Desing</div>
                                    <div className="skills-skill">UI</div>
                                    <div className="skills-skill">React</div>
                                    <div className="skills-skill">FireBase</div>
                                    <div className="skills-skill">React Boostrap</div>
                              </div>
                              </div>
                              <div className='project-details-links'>
                              <h2 className='project-details-n-container-description-title'>See Live</h2>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/REACT-WineEcommerce.git'>PROJECT LINK</a></li>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://react-wineecommerce.onrender.com'>VIEW PROJECT</a></li>
                              <li className="button-primary-project" ><a rel='noreferrer' href='/'>HOME</a></li>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
  );
}

export default Project3;
