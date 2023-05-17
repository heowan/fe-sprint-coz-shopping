import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 264px;

  > .cardImg {
    position: relative;
    > img {
      width: 264px;
      height: 210px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      object-fit: cover;
    }

    > button {
      background-color: rgb(0, 0, 0, 0);
      position: absolute;
      top: 174px;
      left: 224px;

      > img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const ProductDec = styled.div`
  margin-top: 6px;
  > .mainTitle {
    height: 24px;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    font-size: 16px;

    > p {
      color: #452cdd;
    }
  }

  > .subTitle {
    height: 24px;
    font-weight: 500;
    font-size: 16px;
    text-align: right;
  }
`;

export const CategoryDec = styled.div`
  margin-top: 6px;
  > .mainTitle {
    height: 24px;
    font-weight: 800;
    font-size: 16px;
  }

  > .subTitle {
    height: 24px;
  }
`;

export const ExhibitionDec = styled.div`
  margin-top: 6px;
  > .mainTitle {
    height: 24px;
    font-weight: 800;
    font-size: 16px;
  }

  > .subTitle {
    height: 24px;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
  }
`;

export const BrandDec = styled.div`
  margin-top: 6px;
  > .mainTitle {
    height: 24px;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    font-size: 16px;

    > p {
      font-weight: 700;
    }
  }

  > .subTitle {
    height: 24px;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
  }
`;
