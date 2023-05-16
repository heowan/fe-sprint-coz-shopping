import {
  HeaderContainer,
  StyledLink,
  HeaderLeft,
  HeaderRight,
} from "../styled/headerStyle";
import log from "../assets/로고.png";
import menu from "../assets/햄버거 버튼.png";
import DropDownMenu from "./dropdownMenu";
import { useState, useRef, useEffect } from "react";

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
