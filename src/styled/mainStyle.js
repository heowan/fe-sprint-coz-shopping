import { styled } from "styled-components";

export const Container = styled.section`
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-top: 12px;
    width: 1128px;

    > h2 {
      font-weight: 600;
      font-size: 24px;
    }

    > ul {
      margin-top: 12px;
      display: flex;
      justify-content: left;
      > li {
        margin-right: 24px;
      }
      > li:last-child {
        margin-right: 0;
      }
    }
  }
`;
