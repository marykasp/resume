import { AvatarSVG } from "../../assets/image";

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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
