import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import API from "../api/authApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[70vh]">

        <div className="w-full max-w-md border rounded-2xl p-8 shadow-lg">

          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔐</div>

            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Sign in to your TeamFinder account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-purple-600"
            >
              Sign Up
            </Link>
          </p>

        </div>

      </div>
    </Layout>
  );
}

export default Login;