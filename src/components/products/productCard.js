import { useState } from "react";
import { CardContainer } from "../../styled/productCardStyle";
import CardDec from "./productCardDec";
import bookMarkOn from "../../assets/bookmark-on.png";
import bookMarkOf from "../../assets/bookmark-off.png";

// Product Category Exhibition Brand

function ProductCard({ product }) {
  const [isMark, setIsMark] = useState(false);

  const handleClick = () => {
    return setIsMark(!isMark);
  };

  // 테스트를 위한 임시 데이터
  product = {
    id: 10,
    type: "Brand",
    title: null,
    sub_title: null,
    brand_name: "프라다",
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      "https://images.unsplash.com/photo-1607085941350-7d46c83aa9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    follower: 5721,
  };

  return (
    <CardContainer>
      <div className="cardImg">
        <img
          src={
            product.type === "Brand"
              ? product.brand_image_url
              : product.image_url
          }
          alt="상품이미지"
        />
        <button onClick={handleClick}>
          <img src={isMark ? bookMarkOn : bookMarkOf} alt="북마크아이콘" />
        </button>
      </div>
      <CardDec product={product} />
    </CardContainer>
  );
}

export default ProductCard;
