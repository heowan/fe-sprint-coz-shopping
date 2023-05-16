import axios from "axios";

export function getAllProducts() {
  return axios
    .get("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res) => res.data)
    .catch((Error) => console.log(Error));
}
