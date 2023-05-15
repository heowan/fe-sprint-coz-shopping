import { Link } from "react-router-dom";
import styled from "styled-components";
import log from "../assets/로고.png";
import menu from "../assets/햄버거 버튼.png";
import DropDownMenu from "./dropDownMenu";
import { useState, useRef, useEffect } from "react";

const HeaderContainer = styled.header`
  position: relative;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const HeaderRight = styled.div`
  margin-right: 76px;
  cursor: pointer;

  > img {
    width: 34px;
    height: 24px;
  }

  > div {
    position: absolute;
    top: 70px;
    right: 32px;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  const onClickMenuBtn = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <HeaderContainer>
      <StyledLink to="/">
        <HeaderLeft>
          <img src={log} alt="코드스테이츠 로고" />
          <h1>COZ Shoppong</h1>
        </HeaderLeft>
      </StyledLink>

      <HeaderRight ref={menuRef}>
        <button onClick={onClickMenuBtn}>
          <img src={menu} alt="메뉴 버튼" />
        </button>
        <div className="dropDownMenu">
          {isOpen ? (
            <DropDownMenu onClickMenuBtn={onClickMenuBtn} />
          ) : undefined}
        </div>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
