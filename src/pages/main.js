import ProductCard from "../components/products/productCard";
import { Container } from "../styled/mainStyle";
import { useEffect, useState } from "react";
import { getFourProducts } from "../api/productDataApi";
import { getBookmarkList } from "../api/bookmarkDataApi";

function Main() {
  const [productList, setProductList] = useState([]);
  const [bookmarkList, setbookmarkList] = useState([]);
  const [isChangeBookmark, setIsChangeBookmark] = useState(false);

  // 상품리스트 가져오기
  useEffect(() => {
    getFourProducts().then((result) => {
      setProductList(result);
    });
  }, []);

  // 북마크리스트 가져오기
  useEffect(() => {
    const localStorageData = getBookmarkList(4);
    setbookmarkList(localStorageData);
  }, [isChangeBookmark]);

  console.log(bookmarkList);

  return (
    <Container>
      <div className="productList">
        <h2>상품 리스트</h2>
        <ul>
          {productList.map((el) => {
            return (
              <ProductCard
                key={el.id}
                product={el}
                setIsChangeBookmark={setIsChangeBookmark}
              />
            );
          })}
        </ul>
      </div>
      <div className="bookmarkList">
        <h2>북마크 리스트</h2>
        <ul>
          {bookmarkList.map((el) => {
            return (
              <ProductCard
                key={el.id}
                product={el}
                setIsChangeBookmark={setIsChangeBookmark}
                listType={"bookmark"}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Main;
