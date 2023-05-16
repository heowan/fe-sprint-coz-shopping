import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
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

export const MenuBox = styled.ul`
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
