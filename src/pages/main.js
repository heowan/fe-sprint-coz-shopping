import ProductCard from "../components/products/productCard";
import { Container } from "../styled/mainStyle";
import { useEffect, useState } from "react";
import { getFourProducts } from "../api/productDataApi";

function Main({ productList, setProductList, bookmarkList, setBookmarkList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getFourProducts().then((result) => {
      setList(result);
    });
  }, []);

  return (
    <Container>
      <div className="productList">
        <h2>상품 리스트</h2>
        <ul>
          {list.map((el) => {
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
