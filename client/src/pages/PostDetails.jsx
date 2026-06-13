import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import postAPI from "../api/postApi";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await postAPI.get(`/${id}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white flex items-center justify-center font-bold text-lg">
              {post.createdBy?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <h3 className="font-bold text-lg">
                {post.createdBy}
              </h3>

              <p className="text-sm text-slate-500">
                Recruiting Team Members
              </p>
            </div>
          </div>

          {/* Title + Members */}
          <div className="flex justify-between items-start gap-4 mb-4">
            <h1 className="text-4xl font-bold text-slate-900">
              {post.title}
            </h1>

            <span className="border border-slate-300 px-3 py-1 rounded-full text-sm whitespace-nowrap">
              👥 {post.membersNeeded}
            </span>
          </div>

          {/* Hackathon */}
          <div className="mb-8">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
              🚀 {post.hackathon}
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="font-bold text-xl mb-3">
              Project Description
            </h2>

            <p className="text-slate-700 leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="font-bold text-xl mb-3">
              Required Skills
            </h2>

            <div className="flex gap-2 flex-wrap">
              {post.skills?.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-slate-200">
            <p className="text-slate-600">
              Posted by{" "}
              <span className="font-semibold text-slate-900">
                {post.createdBy}
              </span>
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default PostDetails;