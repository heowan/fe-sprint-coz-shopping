import ProductCard from "../components/products/productCard";
import { Container } from "../styled/mainStyle";
import { useEffect, useState } from "react";
import { getFourProducts } from "../api/productDataApi";

function Main() {
  const [productList, setProductList] = useState([]);

  // 상품리스트 가져오기
  useEffect(() => {
    getFourProducts().then((result) => {
      setProductList(result);
    });
  }, []);

  // 북마크리스트 가져오기
  useEffect(() => {
    const bookmarkStr = JSON.parse(window.localStorage.getItem("bookmark"));
    //console.log(bookmarkStr);
  }, []);

  return (
    <Container>
      <div className="productList">
        <h2>상품 리스트</h2>
        <ul>
          {productList.map((el) => {
            return <ProductCard key={el.id} product={el} />;
          })}
        </ul>
      </div>
      <div className="bookmarkList">
        <h2>북마크 리스트</h2>
        <ul></ul>
      </div>
    </Container>
  );
}

export default Main;
