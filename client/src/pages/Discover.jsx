import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import userAPI from "../api/userApi";

function Discover() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await userAPI.get("/");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.fullName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-3xl p-8 mb-8">

          <h1 className="text-4xl font-bold text-slate-900">
            Discover Students
          </h1>

          <p className="text-slate-600 mt-2">
            Find developers, AI engineers, designers and teammates for your next hackathon.
          </p>

          {/* Search */}
          <div className="relative mt-6">

            <span className="absolute left-4 top-3.5 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
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

        {/* Student Cards */}
        <div className="space-y-5">

          {filteredStudents.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
              <p className="text-gray-500">
                No students found
              </p>
            </div>
          ) : (
            filteredStudents.map((student) => (
              <div
                key={student._id}
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

                <div className="flex items-start gap-5">

                  {/* profile picture */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white flex items-center justify-center font-bold text-lg">
                    {student.fullName?.substring(0, 2).toUpperCase()}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h2 className="font-bold text-xl text-slate-900">
                      {student.fullName}
                    </h2>

                    <p className="text-slate-500">
                      {student.college || "College Not Added"}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-3">

                      {student.skills?.length > 0 ? (
                        student.skills.map((skill) => (
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
                        ))
                      ) : (
                        <span className="text-gray-400 text-sm">
                          No skills added
                        </span>
                      )}

                    </div>

                    {/* Status */}
                    <p className="mt-4 text-green-600 font-medium">
                      Looking For Team
                    </p>

                    {/* Button */}
                    <Link
                      to={`/user/${student._id}`}
                      className="
                        inline-block
                        mt-4
                        bg-purple-600
                        hover:bg-purple-700
                        text-white
                        px-5
                        py-2
                        rounded-xl
                        transition
                      "
                    >
                      View Profile
                    </Link>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </Layout>
  );
}

export default Discover;