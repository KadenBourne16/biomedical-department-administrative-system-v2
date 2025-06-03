"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, GraduationCap, Lock, Mail, AlertCircle } from "lucide-react";
import LoginServerSideAction from "@/server/loginAccount";

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    accountType: "student",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newError = {};

    // Basic validation
    if (!loginInfo.email) {
      newError.email = "Email is required";
    }
    if (!loginInfo.password) {
      newError.password = "Password is required";
    }

    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await LoginServerSideAction(loginInfo);
      console.log(response);
      if (response.success) {
        localStorage.setItem("token", response.token);
        const account_type = response.data["account_type"];

        if (account_type === "student") {
          localStorage.setItem("accountId", response.data["_id"]);
          setIsLoading(true);
          setTimeout(() => {
            router.push(`/student/dashboard/${response.data["_id"]}`);
          }, 2000);
        } else if (account_type === "Lecturer") {
          setIsLoading(true);
          localStorage.setItem("lecturer_email", response.data["email"])
          setTimeout(() => {
            router.push(`/lecturer/dashboard/${response.data["_id"]}`);
          }, 2000);
        }
      } else {
        newError.account = response.data || "Invalid credentials. Please check your email and password.";
        setErrors(newError);
      }
    } catch (err) {
      console.log("Login Error:", err);
      newError.account = "An unexpected error occurred. Please try again.";
      setErrors(newError);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTabChange = (value) => {
    setLoginInfo({ ...loginInfo, accountType: value });
    setErrors({}); // Clear errors when switching tabs
  };

  if (isLoading) {
    return <div>Loading...</div>; // Replace with your loading component
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-blue-100">Sign in to your B-D-A-S account</p>
        </div>

        <div className="shadow-2xl border-0 bg-white rounded-lg px-5 pt-5">
          <div className="space-y-1 pb-4">
            <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
          </div>
          <div className="p-4">
            {/* Tab Buttons */}
            <div className="flex justify-around mb-4">
              <button
                onClick={() => handleTabChange("student")}
                className={`flex-1 py-2 text-center font-medium ${loginInfo.accountType === "student" ? "bg-blue-600 text-white" : "text-blue-600"}`}
              >
                Student
              </button>
              <button
                onClick={() => handleTabChange("lecturer")}
                className={`flex-1 py-2 text-center font-medium ${loginInfo.accountType === "lecturer" ? "bg-blue-600 text-white" : "text-blue-600"}`}
              >
                Lecturer
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {loginInfo.accountType === "student" ? "Student Email" : "Faculty Email"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={loginInfo.accountType === "student" ? "Enter your student email" : "Enter your faculty email"}
                    value={loginInfo.email}
                    onChange={handleInputChange}
                    className={`w-full h-10 pl-10 pr-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginInfo.password}
                    onChange={handleInputChange}
                    className={`w-full h-10 pl-10 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
              </div>

              {errors.account && (
                <div className="flex items-center p-2 bg-red-100 border border-red-400 text-red-700">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.account}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Signing In..." : `Sign In as ${loginInfo.accountType.charAt(0).toUpperCase() + loginInfo.accountType.slice(1)}`}
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="text-center">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Forgot your password?
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Don't have an account?</span>
                </div>
              </div>

              <div className="text-center">
                <Link href="/signup" className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  Create a new account
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-blue-100">
            Developed by <span className="font-semibold">KofTechnologies</span>
          </p>
        </div>
      </div>
    </div>
  );
}
