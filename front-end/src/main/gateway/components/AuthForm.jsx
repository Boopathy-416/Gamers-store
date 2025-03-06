import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { login, adminLogin, signup } from "../api/auth";

const AuthForm = ({ type, onSuccess }) => {
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
      onSuccess(data);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Authentication failed");
      console.log()
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
      className="flex flex-col p-4 bg-gray-800 text-white rounded-lg shadow-lg max-w-sm mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 capitalize">{type}</h2>

      {type === "signup" && (
        <input
          {...register("name")}
          placeholder="Full Name"
          className="p-2 mb-2 bg-gray-700 rounded"
          required
        />
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className="p-2 mb-2 bg-gray-700 rounded"
        required
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="p-2 mb-2 bg-gray-700 rounded"
        required
      />
      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded disabled:bg-gray-500"
      >
        {mutation.isPending ? "Processing..." : type}
      </button>
    </form>
  );
};

export default AuthForm;
