import { Link } from "react-router-dom";

function Landing() {
 
  return (
    <div>
      <div className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition-all duration-300">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200 dark:border-gray-800">

          <div className="flex items-center gap-2">
            <div className="bg-purple-600 text-white p-2 rounded-lg">
              ⚡
            </div>

            <h1 className="text-2xl font-bold">
              TeamFinder
            </h1>
          </div>

          <div className="flex items-center gap-4">

          <Link
                to="/login"
                className="font-medium cursor-pointer hover:text-purple-600"
                >
               Login
          </Link>

          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
             Sign Up
          </Link>

          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-gray-900 dark:to-gray-950">

          <div className="max-w-6xl mx-auto text-center py-28 px-6">

            <span className="bg-purple-100 dark:bg-purple-900 dark:text-purple-200 text-purple-700 px-5 py-2 rounded-full text-sm">
              ✨ Find Your Perfect Hackathon Team
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">

              Where Developers Find

              <span className="block text-purple-600">
                Teams
              </span>

              & Build Amazing Things

            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Connect with talented developers, form hackathon teams,
              and turn your ideas into reality. The smartest way to
              find teammates.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">

             <Link
               to="/register"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium"
              >
               Get Started →
              </Link>

              <Link
               to="/login"
               className="border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-xl font-medium"
              >
               I Have an Account
              </Link>
              
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-center">
              Everything You Need
            </h2>

            <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
              Powerful tools to build your dream hackathon team
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-14">

              <div className="p-6 border rounded-2xl hover:shadow-xl hover:border-purple-300 transition-all duration-300 dark:border-gray-800">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="font-semibold text-xl mb-3">
                  Build Your Team
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create recruitment posts and find teammates.
                </p>
              </div>

              <div className="p-6 border rounded-2xl hover:shadow-xl hover:border-purple-300 transition-all duration-300 dark:border-gray-800">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="font-semibold text-xl mb-3">
                  Discover Talent
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Browse student profiles by skills and college.
                </p>
              </div>

              <div className="p-6 border rounded-2xl hover:shadow-xl hover:border-purple-300 transition-all duration-300 dark:border-gray-800">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="font-semibold text-xl mb-3">
                  Connect Instantly
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Chat directly and discuss hackathon ideas.
                </p>
              </div>

              <div className="p-6 border rounded-2xl hover:shadow-xl hover:border-purple-300 transition-all duration-300 dark:border-gray-800">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="font-semibold text-xl mb-3">
                  Smart Matching
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Find teammates with matching skills and interests.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl font-bold">
              How It Works
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-3">
              Three simple steps to find your team
            </p>

            <div className="grid md:grid-cols-3 gap-10 mt-16">

              <div>
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                  01
                </div>
                <h3 className="font-semibold text-xl">
                  Create Profile
                </h3>
                <p className="text-gray-500 mt-2">
                  Add your skills and interests.
                </p>
              </div>

              <div>
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                  02
                </div>
                <h3 className="font-semibold text-xl">
                  Discover Teams
                </h3>
                <p className="text-gray-500 mt-2">
                  Browse recruitment posts.
                </p>
              </div>

              <div>
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                  03
                </div>
                <h3 className="font-semibold text-xl">
                  Connect & Chat
                </h3>
                <p className="text-gray-500 mt-2">
                  Send requests and collaborate.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-24 px-6">

          <div className="max-w-4xl mx-auto">

            <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-3xl text-center text-white py-16 px-6">

              <div className="text-4xl mb-4">
                🚀
              </div>

              <h2 className="text-4xl font-bold">
                Ready To Find Your Team?
              </h2>

              <p className="mt-4 text-purple-100">
                Join thousands of students building amazing projects together.
              </p>

              <Link
                  to="/register"
                  className="mt-8 inline-block bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold"
              >
              Join TeamFinder →
              </Link>

            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 dark:text-gray-400 border-t dark:border-gray-800">
          © 2026 TeamFinder. Built for hackathon teams.
        </footer>

      </div>
    </div>
  );
}

export default Landing;