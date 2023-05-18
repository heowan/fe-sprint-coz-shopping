import {
  ProductDec,
  CategoryDec,
  ExhibitionDec,
  BrandDec,
} from "../../styled/productCardStyle";

export default function CardDec({ product }) {
  // Product Category Exhibition Brand

  if (product.type === "Product") {
    return (
      <ProductDec>
        <div className="mainTitle">
          <h3>{product.title}</h3>
          <p>{product.discountPercentage}%</p>
        </div>
        <div className="subTitle">
          {Number(product.price).toLocaleString()}원
        </div>
      </ProductDec>
    );
  } else if (product.type === "Category") {
    return (
      <CategoryDec>
        <div className="mainTitle">
          <h3>{"# " + product.title}</h3>
        </div>
        <div className="subTitle"></div>
      </CategoryDec>
    );
  } else if (product.type === "Exhibition") {
    return (
      <ExhibitionDec>
        <div className="mainTitle">
          <h3>{product.title}</h3>
        </div>
        <div className="subTitle">{product.sub_title}</div>
      </ExhibitionDec>
    );
  } else if (product.type === "Brand") {
    return (
      <BrandDec>
        <div className="mainTitle">
          <h3>{product.brand_name}</h3>
          <p>관심고객수</p>
        </div>
        <div className="subTitle">
          {Number(product.follower).toLocaleString()}
        </div>
      </BrandDec>
    );
  }
}
