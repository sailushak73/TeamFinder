import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import requestAPI from "../api/requestApi";

function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const res = await requestAPI.get(
        `/receiver/${user.fullName}`
      );

      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await requestAPI.put(`/${id}`, {
        status,
      });

      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Join Requests
        </h1>

        <p className="text-gray-500 mb-8">
          Manage incoming team requests
        </p>

        <div className="space-y-5">

          {requests.length === 0 ? (
            <div className="bg-white rounded-2xl border p-8 text-center">
              <p className="text-gray-500">
                No Requests Yet
              </p>
            </div>
          ) : (
            requests.map((request) => (
              <div
                key={request._id}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-slate-200
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                {/* Sender */}
                <div className="flex items-center gap-3 mb-3">

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white flex items-center justify-center font-bold">
                    {request.sender?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      {request.sender}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Wants to join your team
                    </p>
                  </div>

                </div>

                {/* Status */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    request.status === "accepted"
                      ? "bg-green-100 text-green-700"
                      : request.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {request.status}
                </span>

                {/* Message */}
                <p className="mt-4 text-gray-700">
                  {request.message}
                </p>

                {/* Buttons */}
                {request.status === "pending" && (
                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() =>
                      updateStatus(
                        request._id,
                        "accepted"
                      )
                    }
                    className="
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      cursor-pointer
                      transition
                    "
                  >
                    ✓ Accept
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        request._id,
                        "rejected"
                      )
                    }
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      cursor-pointer
                      transition
                    "
                  >
                    ✕ Reject
                  </button>

                </div>
                )}

              </div>
            ))
          )}

        </div>

      </div>
    </Layout>
  );
}

export default Requests;