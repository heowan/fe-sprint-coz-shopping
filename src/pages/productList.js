import FilterList from "../components/filter/filterList/filterList";
import { ProductListContainer } from "../styled/productListStyle";
import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productDataApi";
import ProductCard from "../components/products/productCard";
import { filterProductsArr } from "../helper/filterProducts";

function ProductList({ isChangeBookmark, setIsChangeBookmark }) {
  const [productList, setProductList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProductList(result);
    });
  }, []);

  return (
    <ProductListContainer>
      <FilterList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <ul>
        {filterProductsArr(currentTab, productList).map((el) => {
          return (
            <ProductCard
              key={el.id}
              product={el}
              setIsChangeBookmark={setIsChangeBookmark}
            />
          );
        })}
      </ul>
    </ProductListContainer>
  );
}

export default ProductList;
