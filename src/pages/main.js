import ProductCard from "../components/products/productCard";
import { Container } from "../styled/mainStyle";
import { useEffect, useState } from "react";

function Main({ productList, setProductList, bookmarkList, setBookmarkList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const list = productList.slice(0, 4);
    setList(list);
  }, [productList]);

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
