"use client";
import Link from "next/link";
import "./login.css";
import { useEffect, useState } from "react";
import LoginServerSideAction from "@/serverSide/loginAccount";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import LoadingScreen from "./components/global/loading_animation";

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState({});
  const router = useRouter(); // Initialize the router

  const handleSubmit = async () => {
    const newError = {};
    try {
      const response = await LoginServerSideAction(loginInfo);

      if (response.success) { // Check if the response indicates success
        localStorage.setItem('token', response.token);
        // Navigate the user to another screen (e.g., dashboard)
        const account_type = response.data["account_type"];

        if(account_type === "student"){
          localStorage.setItem("accountId", response.data["_id"])
          setTimeout(()=> {
            setIsLoading(true);
            if(setTimeout === 1999){
              setIsLoading(false);
            }
            router.push(`/student/dashboard/${response.data["_id"]}`); // Change to your desired route
          }, 2000)
        }else if(account_type === "lecturer"){
          setTimeout(() => {
            router.push("/lecturer/dashboard")
          })
        }else{
          setTimeout(() => {
            router.push("/head-of-department/dashboard")
          })
        }
      } else {
        console.log(response);
        newError.account = `${response.data}, check email or try signing up`; // Set the error message
        setErrors(newError);
      }
    } catch (err) {
      console.log("Login Error, try again", err);
      newError.account = "An unexpected error occurred. Please try again."; // Set a generic error message
      setErrors(newError);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors({});
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [errors]);

  const handleInputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    if (errors.account) {
      setErrors({}); // Clear errors when user starts typing
    }
  };

  if(isLoading){
    return <LoadingScreen/>
  }

  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-[#2541B2] h-screen flex flex-col justify-center items-center py-10 px-4 lg:px-[30em]"
    >
      <div
        className="form-container bg-white flex flex-col text-center items-center shadow-black shadow-2xl space-y-15 h-full w-full rounded-2xl pt-16 px-6 lg:px-40"
      >
        <h1 className="font-bold text-2xl">Sign In</h1>
        <h1 className="font-bold text-2xl text-[#2541B2]">B-D-A-S</h1>
        <div className="w-full text-left space-y-5 mt-10">
          <label className="font-semibold text-[#2541B2]">Username</label>
          <input
            name="email"
            className="block border-b border-gray-800 self-center w-full placeholder:opacity-40 focus:outline-0"
            placeholder="Email"
            onChange={handleInputChange} // Use the new input change handler
          />
        </div>
        <div className="w-full text-left space-y-5">
          <label className="font-semibold text-[#2541B2]">Password</label>
          <input
            name="password"
            type="password" // Added type for password input
            className="block border-b border-gray-800 self-center w-full placeholder:opacity-40 focus:outline-0"
            placeholder="Password"
            onChange={handleInputChange} // Use the new input change handler
          />
        </div>
        <button 
          className="bg-[#2541B2] hover:bg-blue-600 text-white w-full rounded-xl py-3"
          onClick={handleSubmit} // Added onClick to trigger handleSubmit
        >
          Sign In
        </button>
        <span>
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#2541B2] font-semibold hover:text-xl">
            Sign Up
          </Link>
        </span>
        <span>
          {errors.account && <h1 className="text-red-400 font-semibold">{errors.account}</h1>}
        </span>
      </div>
    </ div>
  );
}