import { useEffect, useContext } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Login from "../Login/Login";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
      .then((res) => {
        console.log("getProducts:: ", res);
        setProducts(res);
      })
      .catch((error) => {
        console.log("Error from getProducts: ", error);
      });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
    //     if (res.name !== 'AxiosError') {
    //     // AxiosError {message: 'Request failed with status code 401', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
    //         setCategories(res);
    //     } else {
    //         console.log("Error from getCategories:: ", error);
    //     }
    // })
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
          <Login Login={Login} />
        </div>
      </div>
    </div>
  );
};

export default Home;
