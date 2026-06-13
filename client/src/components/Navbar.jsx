import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <span className="bg-purple-600 text-white px-3 py-1 rounded-lg">
            ⚡
          </span>

          TeamFinder
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">

          <Link to="/dashboard" className="hover:text-purple-600">
            Dashboard
          </Link>

          <Link to="/discover" className="hover:text-purple-600">
            Discover
          </Link>

          <Link to="/team-feed" className="hover:text-purple-600">
            Team Feed
          </Link>

          <Link to="/messages" className="hover:text-purple-600">
            Messages
          </Link>

          <Link to="/profile" className="hover:text-purple-600">
            Profile
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              <span className="font-medium">
                Hi, {user.fullName}
              </span>

              <button
                onClick={handleLogout}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;