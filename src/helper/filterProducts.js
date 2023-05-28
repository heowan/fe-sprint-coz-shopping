let filterArr = [];

export function filterProductsArr(currentTab, productList) {
  if (currentTab === 0) {
    filterArr = [...productList];
  } else if (currentTab === 1) {
    filterArr = productList.filter((el) => el.type === "Product");
  } else if (currentTab === 2) {
    filterArr = productList.filter((el) => el.type === "Category");
  } else if (currentTab === 3) {
    filterArr = productList.filter((el) => el.type === "Exhibition");
  } else if (currentTab === 4) {
    filterArr = productList.filter((el) => el.type === "Brand");
  }

  return filterArr;
}
