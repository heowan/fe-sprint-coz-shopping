import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #888;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  > div {
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .footerMenu > ul {
    display: flex;

    > li {
      position: relative;
      margin-right: 12px;

      > a {
        color: #888;
      }
    }

    > li:last-child {
      margin: 0;
    }

    > li:last-child::before {
      position: absolute;
      content: "";
      width: 1px;
      height: 14px;
      background-color: #000;
      top: 0;
      left: -6px;
    }
  }
`;
