import { styled } from "styled-components";

export const ItemBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82px;
  cursor: pointer;

  > div {
    > img {
      width: 82px;
      height: 82px;
      object-fit: cover;
    }
  }

  > .filterTitle {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    margin-top: 6px;
  }

  > .filterTitle.focuse {
    font-size: 16px;
    font-weight: 700;
    color: #412dd4;
    border-bottom: 3px solid #412dd4;
  }
`;
