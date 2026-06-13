import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Layout>
      
      <div className="max-w-4xl mx-auto px-4 py-12 relative min-h-screen">
        
       
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-25 pointer-events-none"></div>

        <div className="relative bg-white/90 backdrop-blur-md border border-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(93,51,233,0.08)]">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 border-b border-gray-100/80 pb-8">

          
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 text-white rounded-full flex items-center justify-center text-4xl font-black shadow-lg shadow-purple-500/30 ring-4 ring-white shrink-0 transform hover:scale-105 transition-transform duration-300">
              {user?.fullName?.charAt(0)?.toUpperCase()}
            </div>

            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 via-purple-950 to-indigo-900 bg-clip-text text-transparent">
                {user?.fullName}
              </h1>

              <p className="text-purple-600/80 font-semibold text-sm tracking-wide mt-1">
                {user?.email}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                🎓 {user?.college || "College Not Added"}
              </p>

              <span className="inline-flex items-center gap-2 mt-4 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
                Looking For Team
              </span>
            </div>

          </div>

          {/* About Section */}
          <div className="mt-8">
            <h2 className="text-xs uppercase font-black text-purple-600 tracking-widest mb-3">
              About
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm bg-gradient-to-br from-purple-50/40 to-indigo-50/40 rounded-2xl p-5 border border-purple-100/50 shadow-inner">
              {user?.bio || "No bio added yet"}
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h2 className="text-xs uppercase font-black text-purple-600 tracking-widest mb-3">
              Skills
            </h2>

            <div className="flex gap-2.5 flex-wrap">

              {user?.skills?.length > 0 ? (
                user.skills.map((skill) => (
                 <span
                key={skill}
                 className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 font-bold border border-purple-100 px-4 py-2 rounded-xl text-xs"
                >
                {skill}
                </span>
              ))
              ): (
           <p className="text-gray-500 text-sm">
                No skills added yet
              </p>
            )}
              

            </div>

          </div>

          {/* Links Section */}
          <div className="mt-8">

          <h2 className="text-xs uppercase font-black text-purple-600 tracking-widest mb-3">
            Links
         </h2>

       <div className="flex flex-wrap gap-3">

         <a
           href={user?.github}
           target="_blank"
           rel="noreferrer"
          >
         <button className="border border-gray-200/80 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 font-bold px-5 py-3 rounded-xl transition-all duration-200 text-xs tracking-wider uppercase shadow-sm flex items-center gap-2 active:scale-95 transform hover:-translate-y-0.5">
           GitHub
          </button>
         </a>

              <a
                href={user?.linkedin}
                target="_blank"
                rel="noreferrer"
               >
             <button className="border border-gray-200/80 bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 font-bold px-5 py-3 rounded-xl transition-all duration-200 text-xs tracking-wider uppercase shadow-sm flex items-center gap-2 active:scale-95 transform hover:-translate-y-0.5">
                LinkedIn
             </button>
             </a>

          </div>

       </div>
           
          
          <Link
            to="/edit-profile"
            className="inline-block mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:from-purple-800 active:to-indigo-800 text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl shadow-[0_10px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Edit Profile
          </Link>
        
        </div>

      </div>
    </Layout>
  );
}

export default Profile;