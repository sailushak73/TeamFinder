import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import postAPI from "../api/postApi";
import requestAPI from "../api/requestApi";

function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const [myPosts, setMyPosts] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchMyPosts();
    fetchRequests();
  }, []);

  const fetchMyPosts = async () => {
    try {
      const res = await postAPI.get(`/user/${user?.fullName}`);
      setMyPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await requestAPI.get("/");
      const myRequests = res.data.filter(
        (request) =>
          request.receiver === user?.fullName && request.status === "pending"
      );
      setRequests(myRequests);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* HEADER */}
<div className="mb-10 bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-100">

  <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
    Welcome Back, {user?.fullName} 👋
  </h1>

  <p className="mt-3 text-slate-600 text-lg">
    Discover talented developers, create teams, and build amazing hackathon projects.
  </p>

</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/*  PROFILE CARD */}
          <div className="lg:col-span-4 xl:col-span-3 h-fit">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col items-center text-center relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              
              {/* background */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-purple-100 to-indigo-50 -z-10"></div>

              {/* profile picture */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-4xl font-bold shadow-lg shadow-purple-200 mt-4 mb-4 ring-4 ring-white">
                {user?.fullName?.charAt(0)?.toUpperCase()}
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                {user?.fullName}
              </h2>
              <p className="text-slate-500 font-medium mt-1">
                {user?.college || "College Not Specified"}
              </p>

              <span className="mt-4 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-indigo-100">
                Looking For Team
              </span>

              {/* Skills */}
              {user?.skills && user.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mt-6 w-full">
                  {user.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <Link
                to="/edit-profile"
                className="mt-8 w-full bg-white text-slate-700 font-semibold border border-slate-200 py-2.5 rounded-xl hover:bg-slate-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            
            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              
              <Link
                to="/create-post"
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  ➕
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-purple-600 transition-colors">Create Post</h3>
                <p className="text-xs text-slate-500 mt-2">Start a new team hunt</p>
              </Link>

              <Link
                to="/discover"
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  🔍
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-blue-500 transition-colors">Discover</h3>
                <p className="text-xs text-slate-500 mt-2">Find available students</p>
              </Link>

              <Link
                to="/messages"
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative"
              >
                {/* Optional notification dot for unread messages could go here */}
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  💬
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-teal-500 transition-colors">Messages</h3>
                <p className="text-xs text-slate-500 mt-2">Check your inbox</p>
              </Link>

            </div>

            {/* REQUESTS & POSTS SECTIONS */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* INCOMING REQUESTS */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                  <h2 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    Incoming Requests
                  </h2>

                  <Link
                  to="/requests"
                  className="text-purple-600 text-sm font-medium hover:underline"
                    >
                   View All →
                  </Link>
                  {requests.length > 0 && (
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                      {requests.length} New
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 bg-white">
                  {requests.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-8">
                      <div className="text-4xl mb-3 opacity-50">📫</div>
                      <p className="text-slate-500 font-medium">No pending requests</p>
                      <p className="text-sm text-slate-400 mt-1">You're all caught up!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {requests.slice(0, 3).map((request) => (
                        <div
                          key={request._id}
                          className="group rounded-2xl border border-slate-100 p-4 hover:border-purple-200 hover:shadow-md hover:bg-purple-50/30 transition-all duration-200 cursor-pointer flex flex-col gap-1"
                        >
                          <div className="flex justify-between items-start">
                            <p className="font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                              {request.sender}
                            </p>
                            <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5"></span>
                          </div>
                          <p className="text-slate-500 text-sm line-clamp-2">
                            "{request.message}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* MY POSTS */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                  <h2 className="font-bold text-lg text-slate-800">
                    My Posts
                  </h2>
                  <Link
                    to="/team-feed"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-700 hover:underline underline-offset-4"
                  >
                    View All →
                  </Link>
                </div>

                <div className="p-6 flex-1 bg-white">
                  {myPosts.length === 0 ? (
                     <div className="h-full flex flex-col items-center justify-center text-center py-8">
                      <div className="text-4xl mb-3 opacity-50">📝</div>
                      <p className="text-slate-500 font-medium">No posts created yet</p>
                      <Link to="/create-post" className="text-sm text-purple-600 mt-2 hover:underline">
                        Create your first post
                      </Link>
                   </div>
                  ) : (
                    <div className="space-y-4">
                      {myPosts.map((post) => (
                        <div
                          key={post._id}
                          className="group rounded-2xl border border-slate-100 p-4 hover:border-indigo-200 hover:shadow-md hover:bg-indigo-50/30 transition-all duration-200 cursor-pointer"
                        >
                          <h3 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-medium text-slate-600">
                              {post.hackathon}
                            </span>
                            <span>•</span>
                            <span>{post.membersNeeded} members needed</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
