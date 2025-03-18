import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { login, adminLogin, signup } from "../api/auth";
import React from "react";

const AuthForm = ({ type, onSuccess, setUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const mutation = useMutation({
    mutationFn: async (data) => {
      if (type === "login") return login(data);
      if (type === "admin") return adminLogin(data);
      return signup(data); // Send name in signup request
    },
    onSuccess: (data) => {
      toast.success(`${type} successful`);
      reset();

      // ✅ Ensure user is correctly stored in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Immediately update state so Navbar updates
      setUser(data.user);

      onSuccess(data);
    },

    onError: (error) => {
      toast.info(error.response?.data?.message || "If successful ✅, please reload this page.");
    }

  });

  return (
    <form
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
      className="flex flex-col py-4 px-8  text-white text-center  max-w-sm mx-auto"
    >
      <h2 className="text-xs font-bold mb-6 capitalize">Hi there! {type} in to access your account.  </h2>

      {type === "signup" && (
        <input
          {...register("name")}
          placeholder="Full Name"
          className="p-2 mb-2   bg-gray-500 text-black border rounded"
          required
        />
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className="p-2 mb-2  bg-gray-500 text-black border rounded"
        required
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="p-2 mb-2  bg-gray-500 text-black border rounded"
        required
      />
      <button
        type="submit"
        disabled={mutation.isPending}
        className="border hover:bg-yellow-600 uppercase cursor-pointer p-2 rounded disabled:bg-gray-500"
      >
        {mutation.isPending ? "Just a moment..." : type}
      </button>
    </form>
  );
};

export default AuthForm;
