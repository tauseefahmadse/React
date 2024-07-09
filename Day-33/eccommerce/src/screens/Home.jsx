import React from "react";
import ProductCard from "../layouts/ProductCard";
import Loader from "../layouts/Loader";
import { useState,useEffect  } from "react";
import axios from "axios";
import "../css/style.css"

const Home = () => {

  const [loader,setLoader]=useState(true);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fectProducts();
  }, []);

  const fectProducts= async ()=> {
    try {
        setLoader(true);
        await axios.get("https://fakestoreapi.com/products")
        .then((response) => {
        setProduct(response.data);
        console.log("products: ",products);
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
      console.log(error.message)
    }
  }
 

  return (
    <> 
      
     { loader? <Loader /> :
         products.map( pro => <>
          <ProductCard product={pro}/>
         </>
         )
         
        }
      
    </>
  );
};

export default Home;
