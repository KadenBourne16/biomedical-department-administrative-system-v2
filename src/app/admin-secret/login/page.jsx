"use client"
import React, { useState } from 'react';
import { EyeClosed, Eye } from 'lucide-react';
import { signInAdmin } from '@/server/sign_in_admin';
import { useRouter } from 'next/navigation';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingText, setSubmittingText] = useState('Login');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    if(showPassword) {
      setShowPassword(false);
    }else { 
        setShowPassword(true);
    }
  }

  const validateEmail = (value) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');

    setIsSubmitting(true);
    setSubmittingText('Logging in...');
    const loginData = async() => {
        try{
            const  login_response = await signInAdmin(email, password);
            console.log("Login response:", login_response);
            if(login_response.type === "success") {
                localStorage.setItem('admin_token', login_response.token);
                localStorage.setItem('admin_email', login_response.data.email);
                localStorage.setItem('admin_id', login_response.data._id);
                setSubmittingText('Login successful');
                console.log("Login successful:", login_response);
                setSubmittingText('Redirecting...');
                const admin_id_variable = localStorage.getItem('admin_id');
               router.push(`/admin-secret/dashboard/${admin_id_variable}`);
            }

        }catch(err) {
            console.error("Error during admin login:", err);
            setError("Login failed. Please try again.");
        }
    }
    // Handle login logic here
    loginData();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>
          <div className='flex flex-row items-center border rounded focus-within:ring-2 focus-within:ring-blue-200 w-full px-3 py-2'>
            <input
                type={showPassword ? "text" : "password"}
                className="focus:outline-none w-full focus:none mr-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {showPassword ? (<EyeClosed className="" onClick={togglePasswordVisibility} />) : (
                <Eye className="" onClick={togglePasswordVisibility} />
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
            {isSubmitting ?  `${submittingText}`: 'Login'}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;