import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import userAPI from "../api/userApi";

function UserProfile() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await userAPI.get(`/${id}`);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <Layout>
        <p className="text-center mt-10">Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">

            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-lg">
              {user?.fullName?.charAt(0)?.toUpperCase()}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900">
                {user.fullName}
              </h1>

              <p className="text-slate-500 mt-1">
                {user.email}
              </p>

              <p className="text-slate-500">
                {user.college || "College Not Specified"}
              </p>

              <p className="text-slate-500">
                {user.year} • {user.branch}
              </p>

              <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Looking For Team
              </span>
            </div>

            <Link
              to={`/messages/${user.fullName}`}
              className="
                bg-purple-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-purple-700
                transition
                shadow-sm
              "
            >
              Message User
            </Link>

          </div>

          {/* About */}
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-3 text-slate-900">
              About
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="text-slate-600">
                {user.bio || "No bio added yet"}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-slate-900">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {user.skills?.length > 0 ? (
                user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-purple-100
                      text-purple-700
                      px-4
                      py-2
                      rounded-full
                      font-medium
                    "
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-slate-500">
                  No skills added yet
                </p>
              )}

            </div>
          </div>

          {/* Links */}
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-slate-900">
              Links
            </h2>

            <div className="flex gap-4 flex-wrap">

              {user.github && (
                <a
                  href={user.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    border
                    border-slate-300
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-slate-100
                    transition
                    font-medium
                  "
                >
                  GitHub
                </a>
              )}

              {user.linkedin && (
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    border
                    border-slate-300
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-slate-100
                    transition
                    font-medium
                  "
                >
                  LinkedIn
                </a>
              )}

            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default UserProfile;