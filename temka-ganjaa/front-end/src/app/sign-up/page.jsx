// "use client";
// import Link from "next/link";
// import { Geld } from "../components/svg/Geld";
// import { Logo } from "../components/svg/Logo";

// const SignUp = () => {
//   const BACKEND_ENDPOINT = " http://localhost:8000/sign-in";

//   const handleOnSubmit = async (event) => {
//     event.preventDefault();
//     // console.log(event.target);
//     // console.log("event.target.name.value", event.target.name.value);
//     console.log("event.target.password.value", event.target.password.value);

//     const userData = {
//       name: event.target.name.value,

//       email: event.target.email.value,
//       password: event.target.password.value,
//     };
//     console.log("userdata", userData);

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     };
//     console.log("options", options);

//     try {
//       const response = await fetch(BACKEND_ENDPOINT, options);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };
//   return (
//     <div className="w-full h-screen flex justify-between">
//       <div className="w-[50%] h-full flex justify-center items-center">
//         <div className="flex flex-col gap-10 items-center max-w-[384px] w-full">
//           <div className="p-[5.4px] flex gap-[9.46px] items-center">
//             <Logo />
//             <Geld />
//           </div>
//           <div className="flex flex-col gap-2 items-center">
//             <p className="font-roboto text-2xl font-semibold text-[#0F172A]">
//               Create Geld account
//             </p>
//             <p className="font-roboto text-base font-normal text-[#334155]">
//               Sign up below to create your Wallet account
//             </p>
//           </div>
//           <form
//             onSubmit={handleOnSubmit}
//             className="flex flex-col gap-4 w-full"
//           >
//             <input
//               type="text"
//               className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
//               placeholder="Name"
//               name="name"
//             />
//             <input
//               type="email"
//               className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
//               placeholder="Email"
//               email="email"
//             />
//             <input
//               type="password"
//               className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
//               placeholder="Password"
//               password="password"
//             />
//             <input
//               type="password"
//               className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
//               placeholder="Re-password"
//               re-password="re-password"
//             />
//             <button
//               type="submit"
//               className="rounded-full h-[48px] text-[#fff] bg-[#0166FF] text-xl font-normal font-roboto"
//             >
//               Sign up
//             </button>
//           </form>
//           <div className="flex items-center">
//             <p className="text-[#0F172A] font-roboto text-base font-normal">
//               Already have account?
//             </p>
//             <Link
//               href="/sign-in"
//               className="h-8 px-3 flex justify-center items-center text-[#0166FF] text-base font-roboto font-normal "
//             >
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="w-[50%] bg-[#0166FF] h-full"></div>
//     </div>
//   );
// };

// export default SignUp;
"use client";
import Link from "next/link";
import { Geld } from "../components/svg/Geld";
import { Logo } from "../components/svg/Logo";

const SignUp = () => {
  const BACKEND_ENDPOINT = "http://localhost:8000/sign-up"; // Updated to the correct endpoint

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
    <div className="w-full h-screen flex justify-between">
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col gap-10 items-center max-w-[384px] w-full">
          <div className="p-[5.4px] flex gap-[9.46px] items-center">
            <Logo />
            <Geld />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-roboto text-2xl font-semibold text-[#0F172A]">
              Create Geld account
            </p>
            <p className="font-roboto text-base font-normal text-[#334155]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <input
              type="text"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Name"
              name="name" // Corrected to use name attribute
            />
            <input
              type="email"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Email"
              name="email" // Corrected to use name attribute
            />
            <input
              type="password"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Password"
              name="password" // Corrected to use name attribute
            />
            <input
              type="password"
              className="rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] p-4 h-[48px] text-[#A3A3A3] text-base font-normal font-roboto"
              placeholder="Re-password"
              name="re-password" // Optional: handle this in your logic
            />
            <button
              type="submit"
              className="rounded-full h-[48px] text-[#fff] bg-[#0166FF] text-xl font-normal font-roboto"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center">
            <p className="text-[#0F172A] font-roboto text-base font-normal">
              Already have an account?
            </p>
            <Link
              href="/sign-in"
              className="h-8 px-3 flex justify-center items-center text-[#0166FF] text-base font-roboto font-normal "
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#0166FF] h-full"></div>
    </div>
  );
};

export default SignUp;
