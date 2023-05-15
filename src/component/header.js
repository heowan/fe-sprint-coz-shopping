import styled from "styled-components";
import log from "../assets/로고.png";
import menu from "../assets/햄버거 버튼.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 76px;
  cursor: pointer;

  > img {
    width: 55px;
    height: 30px;
  }

  > h1 {
    margin-left: 12px;
    font-size: 32px;
    font-weight: 700;
  }
`;

const HeaderRight = styled.div`
  margin-right: 76px;
  cursor: pointer;

  > img {
    width: 34px;
    height: 24px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={log} alt="코드스테이츠 로고" />
        <h1>COZ Shoppong</h1>
      </HeaderLeft>
      <HeaderRight>
        <img src={menu} alt="메뉴 버튼" />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
