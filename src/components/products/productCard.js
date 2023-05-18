import { useState, useEffect } from "react";
import { CardContainer } from "../../styled/productCardStyle";
import { getBookmarkList, setBookmarkList } from "../../api/bookmarkDataApi";
import CardDec from "./productCardDec";
import bookMarkOn from "../../assets/bookmark-on.png";
import bookMarkOf from "../../assets/bookmark-off.png";

// Product Category Exhibition Brand

function ProductCard({ product }) {
  const [isMark, setIsMark] = useState(false);

  const handleClick = () => {
    if (!isMark) {
      const addBookmark = [...getBookmarkList()];
      addBookmark.push(product);
      setBookmarkList(addBookmark);
      setIsMark(true);
    } else {
      const bookmark = [...getBookmarkList()];
      const delBookmark = bookmark.filter((el) => {
        return el.id !== product.id;
      });
      setBookmarkList(delBookmark);
      setIsMark(false);
    }
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
