"use client";
import React, { useState } from "react";
import { useUserStore } from "../../store/userStore";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

export default function AccountPage() {
  const user = useUserStore((state) => state.user);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const logout = useUserStore((state) => state.logout);
  const [showSignUp, setShowSignUp] = useState(false);

  // Giriş yapılmadıysa login/sign up arayüzü göster
  if (!isLoggedIn || !user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50">
        {/* Üstteki yeşil arka plan */}
        <div
          className={`w-full relative h-56 mb-8 ${
            showSignUp ? "-top-[100px]" : ""
          }`}
        >
          <img
            src={"/login-top-bg.png"}
            alt="login background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center -mt-32">
          {showSignUp ? (
            <SignUpForm onSwitchToSignIn={() => setShowSignUp(false)} />
          ) : (
            <LoginForm onSwitchToSignUp={() => setShowSignUp(true)} />
          )}
        </div>
      </main>
    );
  }

  // Giriş yapıldıysa (ileride gösterilecek ekran)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">👤 {user.name}</h1>
      <p className="mt-2 text-lg text-gray-700">Email: {user.email}</p>
      <p className="mt-2 text-lg text-gray-700">Parola: {user.password}</p>
      <button
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={logout}
      >
        Çıkış Yap
      </button>
    </main>
  );
}
