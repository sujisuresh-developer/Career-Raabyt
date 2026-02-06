import { useState } from "react";
import logo from "../src/assets/icon.png";
import backend from "../src/assets/back.jpg";
import qa from "../src/assets/qa.jpg";
import uiux from "../src/assets/ui.jpeg";

const careersData = [
    {
        title: "Backend Developer",
        img: backend,
        desc: "Build scalable APIs, manage databases, and ensure high performance backend services."
    },
    {
        title: "Quality Analyst",
        img: qa,
        desc: "Ensure product quality through testing, automation, and continuous improvement."
    },
    {
        title: "UI/UX Designer",
        img: uiux,
        desc: "Design intuitive user experiences and visually appealing interfaces."
    }
];

export default function Careers() {
    const [selected, setSelected] = useState(null);
    const [applyJob, setApplyJob] = useState(null);
    const [resumeFile, setResumeFile] = useState(null);

    return (
        <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

            {/* ===== BACKGROUND ===== */}
            <img
                src={logo}
                alt="logo"
                className="absolute w-[360px] sm:w-[400px] md:w-[500px] lg:w-[700px]
        opacity-40 sm:opacity-50 md:opacity-70 blur md:blur mt-10"
            />

            <div className="absolute -left-[180px] -bottom-[180px]
        sm:-left-[220px] sm:-bottom-[220px]
        md:-left-[260px] md:-bottom-[260px]
        w-[300px] h-[300px]
        sm:w-[490px] sm:h-[380px]
        md:w-[490px] md:h-[400px]
        lg:w-[600px] lg:h-[600px]
        rounded-full 
        bg-[radial-gradient(circle_at_center,_#FF3EA5_0%,_#933FBB_70%)]
        opacity-80 blur-[100px] sm:blur-[120px]" />

            <div className="absolute -right-[180px] -top-[180px]
        sm:-right-[220px] sm:-top-[220px]
        md:-right-[260px] md:-top-[260px]
        w-[300px] h-[300px]
        sm:w-[490px] sm:h-[380px]
        md:w-[400px] md:h-[400px]
        lg:w-[600px] lg:h-[600px]
        rounded-full 
        bg-[radial-gradient(circle_at_center,_#FF3EA5_0%,_#933FBB_70%)]
        opacity-80 blur-[100px] sm:blur-[120px]" />

            {/* ===== CARDS ===== */}
            <div className="relative z-10 w-full px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {careersData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl p-6 text-center hover:scale-105 transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-xl mb-4 h-44 w-full object-cover"
                            />

                            <h3 className="text-white text-sm tracking-wide mb-4">
                                {item.title}
                            </h3>

                            <button
                                onClick={() => setSelected(item)}
                                className="px-6 py-2 rounded-full bg-white/10 
                border border-white/20 text-xs text-white
                hover:bg-white/20 transition"
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== DETAIL MODAL ===== */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative bg-white/10 backdrop-blur-xl 
            border border-white/20 rounded-3xl
            h-[420px] sm:h-[480px] md:h-[540px] 
            w-[90%] max-w-md p-6 text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selected.img}
                            alt={selected.title}
                            className="rounded-xl h-36 w-full object-cover mb-4"
                        />

                        <h2 className="text-white text-xl font-bold tracking-wide mb-3">
                            {selected.title}
                        </h2>

                        <p className="text-white/70 text-xs leading-relaxed mb-6">
                            {selected.desc}
                            <br /><br />
                            Responsibilities include collaboration with teams, maintaining best
                            practices, and delivering high-quality solutions.
                        </p>

                        <div className="mt-40">
                            <button
                                onClick={() => {
                                    setApplyJob(selected);
                                    setSelected(null);
                                }}
                                className="px-8 py-2 rounded-full bg-white/10 
                border border-white/20 text-xs text-white
                hover:bg-white/20 transition"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== APPLY MODAL ===== */}
            {applyJob && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setApplyJob(null)}
                >
                    <div
                        className="relative bg-white/10 backdrop-blur-xl 
            border border-white/20 rounded-3xl
            w-[94%] sm:w-[88%] md:w-[80%] lg:w-[70%]
            max-w-3xl max-h-[90vh]
            p-8 text-white overflow-y-auto no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-center text-2xl font-semibold mb-6">
                            {applyJob.title}
                        </h2>

                        <form className="space-y-4 text-sm">
                            <input placeholder="First Name" className="w-full rounded-full bg-white/10 border border-white/30 px-4 py-2 outline-none text-white" />
                            <input placeholder="Last Name" className="w-full rounded-full bg-white/10 border border-white/30 px-4 py-2 outline-none text-white" />
                            <input placeholder="Email Address" className="w-full rounded-full bg-white/10 border border-white/30 px-4 py-2 outline-none text-white" />

                            <textarea
                                rows="3"
                                placeholder="Additional Information"
                                className="w-full rounded-xl bg-white/10 border border-white/30 px-4 py-2 outline-none text-white resize-none"
                            />

                            <label className="relative w-full h-[50px] flex items-center justify-center rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md cursor-pointer hover:bg-white/15 transition">

                                {/* File name / placeholder */}
                                <span className="absolute left-6 text-white/70 text-sm truncate max-w-[70%]">
                                    {resumeFile ? resumeFile.name : "Browse Files"}
                                </span>

                                {/* Upload icon */}
                                <svg
                                    className="w-6 h-6 text-white/60"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                                    />
                                </svg>

                                {/* Hidden input */}
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => setResumeFile(e.target.files[0])}
                                />
                            </label>


                            <div className="pt-4 text-center">
                                <button className="px-10 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
                                    Apply Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </section>
    );
}
