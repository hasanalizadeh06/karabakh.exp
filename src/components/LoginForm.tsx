import React, { useState } from "react";
import { useUserStore } from "../store/userStore";
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";

interface Props {
  onSwitchToSignUp: () => void;
}

const LoginForm: React.FC<Props> = ({ onSwitchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useUserStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: sadece email ve password ile login
    login({ name: "", email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center border" style={{borderColor: '#78A469', boxShadow: '0 8px 32px 0 #78A46922'}}>
      <div className="w-full flex flex-col items-center mb-6">
        <h1 className="text-4xl font-serif mb-6" style={{color: '#78A469', opacity: 0.8, filter: 'drop-shadow(0 1px 1px #78A46933)'}}>Karabakh_exp</h1>
        <h2 className="text-2xl font-bold mb-4" style={{color: '#78A469', letterSpacing: 1}}>Sign In</h2>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="rounded-full px-5 py-3"
          style={{
            background: '#F4F7F2',
            border: '1.5px solid #78A469',
            color: '#78A469',
            fontWeight: 500,
            fontSize: '1rem',
            boxShadow: '0 1px 4px 0 #78A46911',
            outline: 'none',
            padding: '0.75rem 1.25rem',
            marginBottom: 0,
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-full px-5 py-3"
          style={{
            background: '#F4F7F2',
            border: '1.5px solid #78A469',
            color: '#78A469',
            fontWeight: 500,
            fontSize: '1rem',
            boxShadow: '0 1px 4px 0 #78A46911',
            outline: 'none',
            padding: '0.75rem 1.25rem',
            marginBottom: 0,
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex items-center justify-between text-xs font-medium" style={{color: '#78A469'}}>
          <label className="flex items-center gap-1">
            <input type="checkbox" className="mr-1" style={{accentColor: '#78A469'}} />Remember me
          </label>
          <span className="cursor-pointer hover:underline">Forgot password?</span>
        </div>
        <button type="submit" className="mt-2 py-3 rounded-full text-white font-bold shadow-lg text-lg tracking-wide transition" style={{background: 'linear-gradient(90deg, #78A469 0%, #A3C585 100%)', border: 'none'}}>Sign In</button>
      </form>
      <div className="my-4 font-semibold text-base" style={{color: '#78A469'}}>or</div>
      <div className="flex gap-8 mb-4 opacity-90">
        <FaApple size={30} className="cursor-pointer" style={{color: '#78A469'}} />
        <FaGoogle size={30} className="cursor-pointer" style={{color: '#78A469'}} />
        <FaFacebook size={30} className="cursor-pointer" style={{color: '#78A469'}} />
      </div>
      <div className="text-base mt-2">
        <span style={{color: '#78A469', fontWeight: 600}}>First time here?</span>{' '}
        <span className="font-bold cursor-pointer hover:underline" style={{color: '#78A469'}} onClick={onSwitchToSignUp}>
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
