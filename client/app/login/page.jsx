"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        formData
      );
      console.log(response.data.token); // Optional: Store token in local storage
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error(error.response.data.message); // Display error message
    }
  };

  return (
    <main className="h-[100vh] flex flex-col items-center justify-center gap-12">
      <div className="item-center">
        <Image src={"/logo.png"} width={212} height={58} alt="product logo" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-primarycolor font-bold text-3xl">Sign In</h1>
        <p>
          {"Don't have an account?"}{" "}
          <a href="/signup" className="text-primarycolor">
            Sign Up
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-[25px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-400">E-mail address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@example.com"
            className="bg-gray-50 h-[60px] rounded px-3"
          />
          <label className="text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="bg-gray-50 h-[60px] rounded px-3"
          />
          <button
            type="submit"
            className="bg-primarycolor py-3 px-[200px] rounded text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
