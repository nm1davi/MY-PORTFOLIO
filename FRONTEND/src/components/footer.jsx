import React from "react";
import "../css/footer.css";
import axios from "axios";

function Footer() {
  const date = new Date();
  const actualYear = date.getFullYear();
  const handleWhatsapp = async () => {
    try {
      const response = await axios.get("https://backend-portfolio-75uz.onrender.com/api/number");
      const link = response.data.whatsappLink;
      window.open(link, "_blank");
    } catch (error) {
      console.error("Error obteniendo el enlace de WhatsApp:", error);
    }
  };

  return (
    <div className="footer-container-main">
      <div className="footer-container">
        <div className="footer-up">
          <div className="footer-up-row1">
            <h2>
              <span>Social</span>
            </h2>
            <div className="icons-social">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/nicolas-davi"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nm1davi"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/_davinico/"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" onClick={handleWhatsapp}>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-up-row2">
            <h2 className="footer-up-row2-heading">
              <span>NICOLAS DAVI</span>
            </h2>
            <p>
              {" "}
              A Full Stack developer focused on designing and managing web
              sites and applications.
            </p>
          </div>
        </div>
        <div className="footer-low">
          © Copyright {actualYear}. Made By{" "}
          <a rel="noreferrer" target="_blank" href="#">
            Nicolas Davi
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
