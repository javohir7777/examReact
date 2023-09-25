import facebook from "../../../assets/Blog/Facebook/Vector.png";
import instagram from "../../../assets/Blog/Instagram/Group.png";
import linkedin from "../../../assets/Blog/LinkedIn/Group.png";
import twitter from "../../../assets/Blog/Twitter/Vector.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-flex">
        <div className="text">
          <p className="text-body">Finstreet 118 2561 Fintown</p>
          <p className="text-body">Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
