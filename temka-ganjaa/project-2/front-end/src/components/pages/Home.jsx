"use client";
import { useState, useEffect } from "react";
import { Cards } from "../component/Cards";
import { Create } from "../component/Create";

export const HomePage = () => {
  const [product, setProduct] = useState([]);
  const BACKEND_ENDPOINT = "http://localhost:8888"; // Updated to the correct endpoint
  const fetchdata = async () => {
    try {
      const response = await fetch(BACKEND_ENDPOINT);
      const responseData = await response.json();
      setProduct(responseData.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(product);

  const handleOnSubmit = async (event) => {
    event.preventDefault();


    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(BACKEND_ENDPOINT, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Create />
      <div className="max-w-[1546px] w-full h-auto flex flex-wrap gap-[30px]">
        {product?.map((product) => {
          return <Cards key={product?.id} product={product} />;
        })}

        {/* <Cards />
        <Cards />
        <Cards />
        <Cards /> */}
      </div>
    </div>
  );
};
