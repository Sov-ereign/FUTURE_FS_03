"use client";
import { useState } from "react";
import Image from "next/image";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password || (mode === "register" && !confirmPassword)) {
      setError("Please fill in all fields.");
      return;
    }
    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push('/');
      }
    } catch (err: any) {
      // Enhanced error handling for already registered email
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please sign in or use a different email.');
      } else {
        setError(err.message || "Authentication failed.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src="/assests/N--logo.png"
            alt="Netflix Logo"
            width={80}
            height={80}
            className="rounded shadow-lg"
            priority
          />
        </div>
        <div className="glass bg-black/80 p-8 rounded-xl shadow-2xl border border-white/10">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-tight drop-shadow-lg">
            {mode === "login" ? "Sign In" : "Register"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-1 font-semibold" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e50914] placeholder-gray-500"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 font-semibold" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e50914] placeholder-gray-500"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
              />
            </div>
            {mode === "register" && (
              <div>
                <label className="block text-gray-300 mb-1 font-semibold" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e50914] placeholder-gray-500"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>
            )}
            {error && <div className="text-red-500 text-sm text-center font-semibold">{error}</div>}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#e50914] text-white font-bold text-lg shadow hover:bg-[#b0060f] transition-colors tracking-wide"
            >
              {mode === "login" ? "Sign In" : "Register"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              className="text-[#00d4ff] hover:underline text-sm font-semibold"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login"
                ? "Don't have an account? Register"
                : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 