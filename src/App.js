import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Main from "./pages/main";
import ProductList from "./pages/productList";
import Bookmark from "./pages/bookmark";
import Header from "./component/header";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
  }

  button {
    background-color: #fff;
    border: 0;
    cursor: pointer;
  }

`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
