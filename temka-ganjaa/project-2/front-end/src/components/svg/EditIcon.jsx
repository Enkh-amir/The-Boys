"use client";
import { useState } from "react";

export const EditIcon = ({ product: productProps }) => {
  const [product, setProduct] = useState(productProps);
  const EditProduct = async (event) => {
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
  const handleInputChange = (event) => {
    const value = event.target.value;
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={product?.productName}
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={product?.catagory}
          />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={product?.price}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
