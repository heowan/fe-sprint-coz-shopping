import getRandomIndex from "../helper/randomList";
import ProductCard from "../components/products/productCard";
import { Container } from "../styled/mainStyle";

const indexArr = getRandomIndex();

function Main({ productList, setProductList, bookmarkList, setBookmarkList }) {
  console.log(productList);

  const ProductList = () => {
    return indexArr.map((idx) => {
      return <ProductCard product={productList[idx]} />;
    });
  };
  return (
    <Container>
      <div className="productList">
        <h2>상품 리스트</h2>
        <ul>
          <ProductList />
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
