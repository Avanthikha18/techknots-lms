import React, { useState } from "react";
import { login, signInWithGoogle, signInWithGitHub } from "../firebase"; // combine imports
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";  // ✅ Correct import from assets

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      alert("✅ Logged in successfully!");
      navigate("/");
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      alert("✅ Logged in with Google!");
      navigate("/");
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await signInWithGitHub();
      alert("✅ Logged in with GitHub!");
      navigate("/");
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF] text-[#036F3E]">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-[#036F3E]/20 hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}  // ✅ use the imported logo variable
            alt="Tech Knots"
            className="h-14 w-auto object-contain"
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-[#036F3E]">
          Welcome Back
        </h2>

        {/* Email/Password Form */}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-[#036F3E]/30"></div>
          <span className="mx-2 text-sm text-[#036F3E]/70">or</span>
          <div className="flex-grow border-t border-[#036F3E]/30"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-[#036F3E]/50 py-2 rounded-lg text-[#036F3E] font-medium hover:bg-[#036F3E]/10 transition mb-3"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Continue with Google
        </button>

        {/* GitHub Login */}
        <button
          onClick={handleGitHubLogin}
          className="w-full flex items-center justify-center gap-3 border border-[#036F3E]/50 py-2 rounded-lg text-[#036F3E] font-medium hover:bg-[#036F3E]/10 transition"
        >
          <img
            src="https://www.svgrepo.com/show/217753/github.svg"
            alt="GitHub"
            className="h-5 w-5"
          />
          Continue with GitHub
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4 text-[#036F3E]/80">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-[#036F3E] font-semibold cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
