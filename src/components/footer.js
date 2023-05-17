import { FooterContainer } from "../styled/footerStyle";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <div className="footerMenu">
        <ul>
          <li>
            <Link to="#">개인정보 처리방침</Link>
          </li>
          <li>
            <Link to="#">이용약관</Link>
          </li>
        </ul>
      </div>
      <div className="copy">All rights reserved @ Codestates</div>
    </FooterContainer>
  );
}

export default Footer;
