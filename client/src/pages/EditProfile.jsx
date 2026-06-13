import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function EditProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [college, setCollege] = useState(user?.college || "");
  const [year, setYear] = useState(user?.year || "");
  const [branch, setBranch] = useState(user?.branch || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [skills, setSkills] = useState(
    user?.skills?.join(", ") || ""
  );
  const [github, setGithub] = useState(user?.github || "");
  const [linkedin, setLinkedin] = useState(user?.linkedin || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("USER =", user);
    console.log("USER ID =", user?.id);

    try {
        const res = await axios.put(
        `https://teamfinder-l39w.onrender.com/api/auth/profile/${user._id || user.id}`,
        {
          college,
          year,
          branch,
          bio,
          github,
          linkedin,
          skills: skills.split(",").map((s) => s.trim()),
        }
      );

      localStorage.setItem(
      "user",
      JSON.stringify({
      ...user,
      ...res.data,
    })
  );

      alert("Profile Updated Successfully");
    } catch (error) {
  console.log(error);
  console.log(error.response?.data);
  alert("Error updating profile");
   }
  };

  return (
  <Layout>
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-slate-900">
          Edit Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Keep your profile updated so teammates can discover you.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* College */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              College
            </label>

            <input
              type="text"
              placeholder="Enter your college"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Year + Branch */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Year
              </label>

              <input
                type="text"
                placeholder="3rd Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Branch
              </label>

              <input
                type="text"
                placeholder="CSE"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Bio
            </label>

            <textarea
              rows="5"
              placeholder="Tell others about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Skills
            </label>

            <input
              type="text"
              placeholder="React, Node.js, MongoDB, AI/ML"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <p className="text-xs text-slate-500 mt-2">
              Separate multiple skills using commas.
            </p>
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                GitHub Profile
              </label>

              <input
                type="text"
                placeholder="https://github.com/username"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                LinkedIn Profile
              </label>

              <input
                type="text"
                placeholder="https://linkedin.com/in/username"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="
                bg-gradient-to-r
                from-purple-600
                to-violet-600
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                hover:shadow-lg
                hover:scale-[1.02]
                transition-all
              "
            >
              Save Changes
            </button>
          </div>

        </form>

      </div>

    </div>
  </Layout>
);
}

export default EditProfile;