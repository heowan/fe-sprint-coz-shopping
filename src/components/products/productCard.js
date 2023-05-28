import { useState } from "react";
import { CardContainer } from "../../styled/productCardStyle";
import { getBookmarkList, setBookmarkList } from "../../api/bookmarkDataApi";
import CardDec from "./productCardDec";
import bookMarkOn from "../../assets/bookmark-on.png";
import bookMarkOf from "../../assets/bookmark-off.png";
import Modal from "../modal";

const bookmarkList = [...getBookmarkList()];

function ProductCard({ product, setIsChangeBookmark }) {
  const [isMark, setIsMark] = useState(
    bookmarkList.find((el) => el.id === product.id) ? true : false
  );
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    if (!isMark) {
      const addBookmark = [...getBookmarkList()];
      addBookmark.push(product);
      setBookmarkList(addBookmark);
      setIsChangeBookmark(true);
      setIsChangeBookmark(false);
      setIsMark(true);
    } else {
      const bookmark = [...getBookmarkList()];
      const delBookmark = bookmark.filter((el) => {
        return el.id !== product.id;
      });
      setBookmarkList(delBookmark);
      setIsChangeBookmark(true);
      setIsChangeBookmark(false);
      setIsMark(false);
    }
  };

  const handleClickImg = () => {
    setOpenModal(!openModal);
    return;
  };

  return (
    <CardContainer>
      <div className="cardImgContainer">
        <button className="cardImg" onClick={handleClickImg}>
          <img
            src={
              product.type === "Brand"
                ? product.brand_image_url
                : product.image_url
            }
            alt="상품이미지"
          />
        </button>
        <button className="bookmark" onClick={handleClick}>
          <img src={isMark ? bookMarkOn : bookMarkOf} alt="북마크아이콘" />
        </button>
      </div>
      <CardDec product={product} />
      {openModal ? (
        <Modal
          handleClickImg={handleClickImg}
          handleClick={handleClick}
          isMark={isMark}
          img={
            product.type === "Brand"
              ? product.brand_image_url
              : product.image_url
          }
          title={product.type === "Brand" ? product.brand_name : product.title}
        />
      ) : undefined}
    </CardContainer>
  );
}

export default ProductCard;
