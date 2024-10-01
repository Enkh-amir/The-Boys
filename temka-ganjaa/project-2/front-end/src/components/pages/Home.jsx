import { useEffect, useState } from "react/cjs/react.production.min";
import { Cards } from "../component/Cards";
import { Create } from "../component/Create";

export const HomePage = () => {
  const [product, setProduct] = useState([]);
  const BACKEND_ENDPOINT = "http://localhost:8000/sign-up"; // Updated to the correct endpoint
  try {
     const fetchProduct = async () => {
    const response = await fetch(BACKEND_ENDPOINT);
    const responseData = await response.json();
    setProduct(responseData);
  };
  } catch (error){
console.log(error);

  }
 

  useEffect(fetchProduct(), []);
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

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

      if (data.success) {
        // Handle successful signup (e.g., redirect or show message)
        console.log("User signed up successfully:", data.user);
      } else {
        // Handle signup failure (e.g., show error message)
        console.error("Signup failed:", data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Create />
      <div className="max-w-[1546px] w-full h-auto flex flex-wrap gap-[30px]">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};
