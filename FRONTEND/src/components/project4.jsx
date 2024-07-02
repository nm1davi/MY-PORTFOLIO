import React from 'react';
import "../css/projects.css";
function Project4() {
  return (
      <section className='projectn'>
            <div className="project">
            <div className="project-container">
          <h1 className="heading-primary-project">INDUSTRIAL HARDWARE ECOMMERCE</h1>
          <div className="profile-info-project">
            <p className="text-primary-project">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="button-container">
          <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/Ecommerce-Industrial-Hardware--FullStack.git'>PROJECT LINK</a></li>
          </div>
        </div>
            </div>
            <div className='project-n-container'>
                  <div className='project-details-n-container'>
                        <div className='project-details-n-container-img'>
                              <img src='/PROYECTO-ECOMMERCE-FULLSTACK.png'  alt='Imagen de Proyecto 4'/>
                        </div>
                        <div className='project-details-n-container-description-main'>
                              <div className='project-details-n-container-description'>
                                    <h2 className='project-details-n-container-description-title'>Project Description</h2>
                                    <p className="project-details-n-container-description-p">
                                    This project was the last of those that I carried out under the supervision of a teacher and tutor to obtain my Backend Programmer developer certificate
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    This was where I learned to put the backend and frontend parts together, it was the most complete project I have ever done. I learned a lot about the <strong className='keyword'>Backend</strong> and put it into practice
                                    </p>
                                    <p className="project-details-n-container-description-p">
                                    It is an E-commerce where you can browse and buy products, but unlike other E-commerce, to be able to do so you have to register and log in to enter the store.
                                    In the project link you can see all the tools used to carry out this work optimally and correctly.
                                    </p>
                              </div>
                              <div className='project-details-tools-used'>
                              <h2 className='project-details-n-container-description-title'>Tools Used</h2>
                              <div className="skills">
                                    <div className="skills-skill">HTML (Handlebars)</div>
                                    <div className="skills-skill">CSS</div>
                                    <div className="skills-skill">JavaScript</div>
                                    <div className="skills-skill">Responsive Desing</div>
                                    <div className="skills-skill">Node.js</div>
                                    <div className="skills-skill">Advanced Express</div>
                                    <div className="skills-skill">JWT (with GitHub)</div>
                                    <div className="skills-skill">Dotenv</div>
                                    <div className="skills-skill">MongoDB and Mongoose</div>
                              </div>
                              </div>
                              <div className='project-details-links'>
                              <h2 className='project-details-n-container-description-title'>See Live</h2>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://github.com/nm1davi/Ecommerce-Industrial-Hardware--FullStack.git'>PROJECT LINK</a></li>
                              <li className="button-primary-project" ><a target='_blank' rel='noreferrer' href='https://ecommerce-industrial-hardware-fullstack.onrender.com'>VIEW PROJECT</a></li>
                              <li className="button-primary-project" ><a rel='noreferrer' href='/'>HOME</a></li>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
  );
}

export default Project4;
