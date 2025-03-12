import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-blue-300 h-screen flex flex-col justify-center items-center py-10 px-4 lg:px-[30em]"
    >
      <div
        className="form-container bg-white flex flex-col text-center items-center shadow-black shadow-2xl space-y-15 h-full w-full rounded-2xl pt-16 px-6 lg:px-40"
      >
        <h1 className="font-bold text-2xl">Sign In</h1>
        <div className="w-full text-left space-y-5 mt-10">
          <label className="font-semibold text-blue-700">Username</label>
          <input
            name="email"
            className="block border-b border-gray-800 self-center w-full placeholder:opacity-40"
            placeholder="Email"
          />
        </div>
        <div className="w-full text-left space-y-5">
          <label className="font-semibold text-blue-700">Password</label>
          <input
            name="password"
            className="block border-b border-gray-800 self-center w-full placeholder:opacity-40"
            placeholder="Password"
          />
        </div>
        <button className="bg-blue-400 hover:bg-blue-600 text-white w-full h-10 rounded-xl">
          Sign In
        </button>
        <span>
          Don't have account?{" "}
          <Link href={"/signup"} className="text-blue-400 font-semibold hover:text-xl">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

