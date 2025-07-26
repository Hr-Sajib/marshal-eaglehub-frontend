"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaApple, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    router.push("/login-success");
    console.log("Login Data:", data);
    // handle login logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center  px-4">
      <div className="w-full space-y-6 bg-gradient-to-b   rounded-lg shadow-md">
        <h2 className="text-4xl md:text-3xl hidden lg:block font-bold text-white  ">
          Log in to EGEAL AI HUB
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-white block mb-1 text-sm">
              Email Address
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 rounded border border-red-600   text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-white block mb-1 text-sm">Password</label>
            <div className="relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded border border-red-600   text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[-20px] text-gray-400 text-xs cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center text-white text-sm">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
          >
            Log In
          </button>
        </form>

        <div className="text-center  text-white underline">
          <a href="#" className="text-red-400 text-xs hover:underline">
            Forgot your password
          </a>
        </div>

        <div className="text-center text-white text-xs underline">
          Don’t have an account?{" "}
          <a href="#" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className=" bg-black px-3 text-gray-200">
              Or Continue with
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-6 text-3xl">
          <FaFacebookF className="text-[#1877F2] hover:scale-110 transition cursor-pointer" />
          <FaApple className="text-[#fff] hover:scale-110 transition cursor-pointer  rounded-full " />
          <FcGoogle className=" hover:scale-110 transition cursor-pointer" />
          <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
