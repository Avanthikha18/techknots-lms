import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account created successfully!");
      navigate("/"); // redirect to home
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF] text-[#036F3E]">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-[#036F3E]/20 hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#036F3E]">
          Create Account
        </h2>

        <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#036F3E]/40 rounded-lg p-3 focus:outline-none focus:border-[#036F3E]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-[#036F3E]/40 rounded-lg p-3 focus:outline-none focus:border-[#036F3E]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#036F3E] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {loading ? "Creating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
