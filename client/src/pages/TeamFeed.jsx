import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import postAPI from "../api/postApi";
import requestAPI from "../api/requestApi";
import { Link } from "react-router-dom";

function TeamFeed() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await postAPI.get("/");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendRequest = async (post) => {
    try {
      await requestAPI.post("/", {
        sender: user?.fullName,
        receiver: post.createdBy,
        postId: post._id,
        message: `I'd like to join "${post.title}"`,
      });

      alert("Request Sent Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.hackathon?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-3xl p-8 mb-8">

          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Team Feed
              </h1>

              <p className="text-slate-600 mt-2">
                Explore team recruitment posts and join exciting projects.
              </p>
            </div>

            <Link
              to="/create-post"
              className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Create Post
            </Link>

          </div>

          {/* Search */}
          <div className="relative mt-6">

            <span className="absolute left-4 top-3.5 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search hackathons or posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-12
                pr-4
                py-3
                bg-white
                rounded-xl
                border
                border-slate-200
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
            />

          </div>

        </div>

        {/* Posts */}
        <div className="space-y-5">

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
              <p className="text-gray-500">
                No posts found
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post._id}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-slate-200
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  hover:border-purple-300
                  transition-all
                  duration-300
                "
              >

                {/* Creator + Badge */}
                <div className="flex justify-between items-start mb-4">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white flex items-center justify-center font-bold">
                      {post.createdBy?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold">
                        {post.createdBy}
                      </p>

                      <p className="text-sm text-gray-500">
                        Recruiting Team Members
                      </p>
                    </div>

                  </div>

                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm border">
                    👥 {post.membersNeeded} needed
                  </span>

                </div>

                {/* Post Content */}
                <h2 className="text-2xl font-bold text-slate-900">
                  {post.title}
                </h2>

                <p className="text-purple-600 font-medium mt-1">
                  {post.hackathon}
                </p>

                <p className="text-gray-600 mt-4">
                  {post.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">

                  {post.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="
                        bg-purple-100
                        text-purple-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/post/${post._id}`}
                    className="
                      bg-purple-600
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      hover:bg-purple-700
                      transition
                    "
                  >
                    View Details
                  </Link>

                  {post.createdBy !== user?.fullName && (
                    <button
                      onClick={() => sendRequest(post)}
                      className="
                        border
                        border-purple-300
                        text-purple-700
                        px-5
                        py-2
                        rounded-xl
                        hover:bg-purple-50
                        transition
                      "
                    >
                      Request To Join
                    </button>
                  )}

                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </Layout>
  );
}

export default TeamFeed;