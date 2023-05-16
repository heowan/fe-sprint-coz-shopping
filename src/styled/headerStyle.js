import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderLeft = styled.div`
  top: 0;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const HeaderRight = styled.div`
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
