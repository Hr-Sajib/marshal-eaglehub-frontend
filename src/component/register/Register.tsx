/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUser } from "@/context/UserContext";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebookF, FaApple, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { fetchAndSetUser } = useUser();

  const onSubmit = async (data: FormData) => {
    try {
      const { confirmPassword, ...userData } = data;
      const res = await registerUser(userData);
      
      if (res.success) {
        toast.success("Registration successful!");
        await fetchAndSetUser();
        router.push("/");
      } else {
        toast.error(res.message || "Registration failed");
      }
    } catch (error: any) {
      toast.error(error?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full space-y-6 bg-gradient-to-b rounded-lg shadow-md">
        <h2 className="text-4xl md:text-3xl hidden lg:block font-bold text-white">
          Register for EGEAL AI HUB
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white block mb-1 text-sm">
                First Name
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 rounded border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white block mb-1 text-sm">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 rounded border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-white block mb-1 text-sm">
              Email Address
            </label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 rounded border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
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
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
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

          <div>
            <label className="text-white block mb-1 text-sm">
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword", { 
                  required: "Please confirm your password",
                  validate: (value) => 
                    value === watch('password') || "Passwords do not match"
                })}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[-20px] text-gray-400 text-xs cursor-pointer"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-white block mb-1 text-sm">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full px-4 py-2 rounded border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-600 bg-black"
            >
              <option value="">Select your role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              {/* Add other roles as needed */}
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
          >
            Register
          </button>
        </form>

        <div className="text-center text-white text-xs underline">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login
          </a>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-black px-3 text-gray-200">
              Or Continue with
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-6 text-3xl">
          <FaFacebookF className="text-[#1877F2] hover:scale-110 transition cursor-pointer" />
          <FaApple className="text-[#fff] hover:scale-110 transition cursor-pointer rounded-full" />
          <FcGoogle className="hover:scale-110 transition cursor-pointer" />
          <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
