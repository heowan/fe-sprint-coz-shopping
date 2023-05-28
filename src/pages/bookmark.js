import FilterList from "../components/filter/filterList/filterList";
import { ProductListContainer } from "../styled/productListStyle";
import { useState, useEffect } from "react";
import { getBookmarkList } from "../api/bookmarkDataApi";
import ProductCard from "../components/products/productCard";
import { filterProductsArr } from "../helper/filterProducts";

function Bookmark({ isChangeBookmark, setIsChangeBookmark }) {
  const [bookmarkList, setbookmarkList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const localStorageData = getBookmarkList();
    setbookmarkList(localStorageData);
  }, [isChangeBookmark]);

  return (
    <ProductListContainer>
      <FilterList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <ul>
        {filterProductsArr(currentTab, bookmarkList).map((el) => {
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

export default Bookmark;
