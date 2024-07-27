import React from "react";
import ProductCard from "../layouts/ProductCard";
import Loader from "../layouts/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fectProducts();
  }, []);

  const fectProducts = async () => {
    try {
      setLoader(true);
      await axios.get("https://fakestoreapi.com/products").then((response) => {
        setProduct(response.data);
        console.log("products: ", products);
        setLoader(false);

        /* setLoader(true);
          const api = "https://fakestoreapi.com/products";
          const {data} = await axios.get(api);
          setProduct(data);
          setLoader(false);
        */
      });
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loader ? (
              <Loader />
            ) : (
              products.map((pro) => (
                <>
                  <ProductCard product={pro} />
                </>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
