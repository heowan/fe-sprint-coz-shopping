import { FooterContainer } from "../styled/footerStyle";

function Footer() {
  return (
    <FooterContainer>
      <div className="footerMenu">
        <ul>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
        </ul>
      </div>
      <div className="copy">All rights reserved @ Codestates</div>
    </FooterContainer>
  );
}

export default Footer;
