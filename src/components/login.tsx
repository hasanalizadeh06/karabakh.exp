import React, { useState } from 'react';
import { useUserStore } from '../store/userStore';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useUserStore((state: any) => state.login);
  const isLoggedIn = useUserStore((state: any) => state.isLoggedIn);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name, email, password });
  };

  if (isLoggedIn) {
    return <div>Zaten giriş yaptınız.</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Parola"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default Login;
