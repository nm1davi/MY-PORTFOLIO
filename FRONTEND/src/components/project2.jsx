import React from 'react';
import "../css/projects.css";
function Project2() {
  return (
      <section className='projectn'>
            <div className="project">
            <div className="project-container">
          <h1 className="heading-primary-project">ECOMMERCE COFFEE</h1>
          <div className="profile-info-project">
            <p className="text-primary-project">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="button-container">
          <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/JavaScript-Ecommerce-Cafe.git'>PROJECT LINK</a></li>
          </div>
        </div>
            </div>
            <div className='project-n-container'>
                  <div className='project-details-n-container'>
                        <div className='project-details-n-container-img'>
                              <img src='/PROYECTO-CAFE.png'  alt='Imagen de Proyecto 2'/>
                        </div>
                        <div className='project-details-n-container-description-main'>
                              <div className='project-details-n-container-description'>
                                    <h2 className='project-details-n-container-description-title'>Project Description</h2>
                                    <p className="project-details-n-container-description-p">
                                    Ecommerce Coffee it was also a final project for my JavaScript course, therefore it was supervised by my professor and course tutor.
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    In this job I learned a lot about JavaScript, implementing that language in my project. 
                                    Unlike my first project, in this one I applied a design that was a little more studied and consulted with professionals, thus learning a little more about the design itself.
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
                                    <div className="skills-skill">Boostrap</div>
                                    <div className="skills-skill">Google Map API</div>
                              </div>
                              </div>
                              <div className='project-details-links'>
                              <h2 className='project-details-n-container-description-title'>See Live</h2>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/JavaScript-Ecommerce-Cafe.git'>PROJECT LINK</a></li>
                              <li className="button-primary-project" ><a rel='noreferrer' href='/'>HOME</a></li>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
  );
}

export default Project2;
