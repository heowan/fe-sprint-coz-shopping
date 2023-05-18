import { Container } from "../styled/modalStyle";
import close from "../assets/close.png";
import bookMarkOn from "../assets/bookmark-on.png";
import bookMarkOf from "../assets/bookmark-off.png";
import { useRef, useEffect } from "react";

function Modal({ handleClickImg, handleClick, isMark, img, title }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClickImg();
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  return (
    <Container>
      <div ref={modalRef}>
        <img src={img} alt="상품이미지" />
        <button className="closeBtn" onClick={handleClickImg}>
          <img src={close} alt="닫기 버튼" />
        </button>
        <button className="bookmark" onClick={handleClick}>
          <img src={isMark ? bookMarkOn : bookMarkOf} alt="북마크아이콘" />
        </button>
        <h3>{title}</h3>
      </div>
    </Container>
  );
}

export default Modal;
