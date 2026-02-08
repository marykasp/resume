import { FaEnvelope, FaPhone, FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AvatarSVG, Dribble, Email, Figma, Linkedin } from "../../assets/image";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarSVG} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Mary Kasparian, <br />
                UX/UI Designer
              </h1>
            </div>
            <p className="header-text text text-white">
              As a designer, I highly value the ability to bring a client's
              vision to life, which is very rewarding. There is a huge amount of
              satisfaction I gain from seeing a piece of work from idea to
              design, especially when it appers in the user hands. I believe the
              user-centered solutions are the most valuable future digital
              resources.
            </p>
          </div>

          {/* header content */}
          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">marykasp@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+1 (219) 309-7225</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">Chicago, USA</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={16} />
                </span>
                <p className="info-item-text">
                  Website:{" "}
                  <span className="text">https://marykasparian.com</span>
                </p>
              </li>
            </ul>

            <ul className="contact-social-list flex-items-center">
              <li className="social-item">
                <Link to="/">
                  <img src={Dribble} alt="dribble" />
                  <span className="tooltip text">Dribble</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Linkedin} alt="linkedin" />
                  <span className="tooltip text">LinkedIn</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Email} alt="email" />
                  <span className="tooltip text">Email</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Figma} alt="figma" />
                  <span className="tooltip text">Figma</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
