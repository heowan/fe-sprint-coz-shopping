import { MenuBox, StyledLink } from "../styled/menuStyle";
import productListIcon from "../assets/상품 아이콘.png";
import bookmarkIcon from "../assets/북마크 아이콘.png";

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
