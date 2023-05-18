import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.4);

  > div {
    position: relative;
    width: 744px;
    height: 480px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
    }

    > .closeBtn {
      background-color: rgb(0, 0, 0, 0);
      width: 24px;
      height: 24px;
      position: absolute;
      top: 24px;
      right: 24px;
    }

    > .bookmark {
      background-color: rgb(0, 0, 0, 0);
      width: 24px;
      height: 24px;
      position: absolute;
      bottom: 27px;
      left: 24px;
    }

    > h3 {
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      position: absolute;
      left: 60px;
      bottom: 20px;
    }
  }
`;
