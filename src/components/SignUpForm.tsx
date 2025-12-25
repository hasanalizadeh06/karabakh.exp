import React, { useState } from "react";
import { useUserStore } from "../store/userStore";
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";

interface Props {
  onSwitchToSignIn: () => void;
}

const SignUpForm: React.FC<Props> = ({ onSwitchToSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const login = useUserStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: kayıt sonrası login
    login({ name, email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-green-100" style={{boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10)'}}>
      <div className="w-full flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold mb-4 text-green-800" style={{letterSpacing: 1}}>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="rounded-full px-5 py-3 bg-green-50 border border-green-200 text-[#78A469] placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-base font-medium shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-full px-5 py-3 bg-green-50 border border-green-200 text-[#78A469] placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-base font-medium shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className="rounded-full px-5 py-3 bg-green-50 border border-green-200 text-[#78A469] placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 text-base font-medium shadow-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="flex items-center text-xs text-[#78A469] font-medium">
          <input type="checkbox" className="mr-1 accent-green-500" required />
          By signing up I accept Privacy Policy Terms
        </div>
        <button type="submit" className="mt-2 py-3 rounded-full bg-gradient-to-r from-[#78A469] to-[#78A469] text-white font-bold shadow-lg text-lg tracking-wide transition hover:from-[#78A469] hover:to-[#78A469]">Sign Up</button>
      </form>
      <div className="my-4 text-[#78A469] font-semibold text-base">or</div>
      <div className="flex gap-8 mb-4 opacity-90">
        <FaApple size={30} className="cursor-pointer text-[#78A469] hover:text-green-600 transition" />
        <FaGoogle size={30} className="cursor-pointer text-[#78A469] hover:text-green-600 transition" />
        <FaFacebook size={30} className="cursor-pointer text-[#78A469] hover:text-green-600 transition" />
      </div>
      <div className="text-base mt-2">
        <span className="text-green-800">Already have an account?</span>{' '}
        <span className="text-green-600 font-bold cursor-pointer hover:underline" onClick={onSwitchToSignIn}>
          Sign In
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
