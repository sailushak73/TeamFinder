import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import postAPI from "../api/postApi";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [hackathon, setHackathon] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [membersNeeded, setMembersNeeded] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await postAPI.post("/", {
        title,
        hackathon,
        description,
        skills: skills.split(",").map((s) => s.trim()),
        membersNeeded,
        createdBy: user?.fullName,
      });

      alert("Post Created Successfully!");
      navigate("/team-feed");
    } catch (error) {
      console.log(error);
      alert("Failed to create post");
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">

       {/* Header */}
<div className="bg-gradient-to-br from-purple-50 via-indigo-50/30 to-white border border-purple-100 rounded-3xl p-8 mb-8 shadow-[0_8px_30px_rgb(237,233,254,0.5)]">

  <h1 className="text-4xl font-bold text-slate-900 bg-gradient-to-r from-purple-600 to-slate-900 bg-clip-text text-transparent">
    Create Post
  </h1>

  <p className="text-slate-600 mt-2">
    Find talented teammates and build your dream hackathon team.
  </p>

</div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            border border-slate-200
            rounded-3xl
            p-8
            shadow-sm
            space-y-6
          "
        >

          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Post Title
            </label>

            <input
              type="text"
              placeholder="Looking for MERN Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
              required
            />
          </div>

          {/* Hackathon */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Hackathon Name
            </label>

            <input
              type="text"
              placeholder="Smart India Hackathon"
              value={hackathon}
              onChange={(e) => setHackathon(e.target.value)}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Project Description
            </label>

            <textarea
              rows="5"
              placeholder="Describe your project idea, goals and what kind of teammates you're looking for..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Required Skills
            </label>

            <input
              type="text"
              placeholder="React, Node.js, MongoDB, UI/UX"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
              required
            />
          </div>

          {/* Members Needed */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Team Members Needed
            </label>

            <input
              type="number"
              placeholder="2"
              value={membersNeeded}
              onChange={(e) => setMembersNeeded(e.target.value)}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              bg-purple-600
              text-white
              py-4
              rounded-xl
              font-semibold
              hover:bg-purple-700
              transition
            "
          >
             Create Post
          </button>

        </form>

      </div>
    </Layout>
  );
}

export default CreatePost;