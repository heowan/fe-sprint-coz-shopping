import { Link } from "react-router-dom";
import { styled } from "styled-components";
import productListIcon from "../assets/상품 아이콘.png";
import bookmarkIcon from "../assets/북마크 아이콘.png";

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 24px;

  > img {
    width: 20px;
    height: 20px;
  }

  > p {
    margin-left: 8px;
  }
`;

const MenuBox = styled.ul`
  font-size: 16px;
  font-weight: 400;
  background-color: #fff;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));

  > li.fistLi {
    cursor: default;
  }

  > li {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #0000001a;
  }

  > li:last-child {
    border: 0;
  }

  &::after {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 18px solid #fff;
    content: "";
    position: absolute;
    top: -18px;
    left: 130px;
  }
`;

function DropDownMenu({ onClickMenuBtn }) {
  return (
    <MenuBox>
      <li className="fistLi">OOO님, 안녕하세요!</li>
      <li>
        <StyledLink to="/products/list" onClick={onClickMenuBtn}>
          <img src={productListIcon} alt="상품리스트 아이콘" />
          <p>상품리스트 페이지</p>
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/bookmark" onClick={onClickMenuBtn}>
          <img src={bookmarkIcon} alt="북마크 아이콘" />
          <p>북마크 페이지</p>
        </StyledLink>
      </li>
    </MenuBox>
  );
}

export default DropDownMenu;
