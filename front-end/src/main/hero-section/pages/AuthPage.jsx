import { useState } from "react";
import { useAuth } from "../Authentication/hooks/useAuth"
import {Input,Button} from "../ui/index"


export default function AuthForm({ isLogin }) {
  const { loginMutation, signupMutation } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", captcha: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? loginMutation.mutate(form) : signupMutation.mutate(form);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {!isLogin && <Input type="text" label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />}
      <Input type="email" label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input type="password" label="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Input type="text" label="CAPTCHA" value={form.captcha} onChange={(e) => setForm({ ...form, captcha: e.target.value })} />

      <Button type="submit" text={isLogin ? "Login" : "Sign Up"} />
    </form>
  );
}
