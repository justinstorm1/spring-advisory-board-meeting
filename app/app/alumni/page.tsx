import { GraduationCap, BookOpen } from "lucide-react"

const colleges = [
    { name: "Brookdale Community College", abbr: "BCC" },
    { name: "Kutztown University", abbr: "KU" },
    { name: "Los Angeles Film School", abbr: "LAFS" },
    { name: "New Jersey Institute of Technology", abbr: "NJIT" },
    { name: "New York University", abbr: "NYU" },
    { name: "Rutgers University", abbr: "RU" },
    { name: "The College of New Jersey", abbr: "TCNJ" },
    { name: "Yale University", abbr: "YU" },
    { name: "Rowan University", abbr: "ROW" },
    { name: "Drew University", abbr: "DU" },
    { name: "Rochester Institute of Technology", abbr: "RIT" },
];

const majors = [
    "Applied Mathematics",
    "Bachelor of Science in Film",
    "Biomedical Engineering",
    "Cell Biology",
    "Computer Science",
    "Cybersecurity",
    "Data Science",
    "Electrical Engineering",
    "Information Systems",
    "Information Technology",
    "Mathematics",
    "Mechanical Engineering",
    "Neuroscience",
    "Video Production",

    // Added
    "Radio, TV, and Film Production",
    "Physics Engineering",
    "Game Design",
    "Graphic Design",
];


export default function Page() {
    return (
        <div className="min-h-svh bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent w-fit">
                        Alumni
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {colleges.length} schools &middot; {majors.length} fields of study
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">

                {/* Colleges */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Colleges & Universities</h2>
                        <span className="ml-auto text-xs text-gray-400 tabular-nums">{colleges.length}</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {colleges.map((college) => (
                            <div
                                key={college.name}
                                className="group flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 hover:border-blue-200 hover:shadow-sm transition-all duration-150 cursor-default"
                            >
                                <div className={`flex-shrink-0 w-9 h-9 rounded-lg border text-xs font-black flex items-center justify-center`}>
                                    {college.abbr}
                                </div>
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                                    {college.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Majors */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Fields of Study</h2>
                        <span className="ml-auto text-xs text-gray-400 tabular-nums">{majors.length}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {majors.map((major) => (
                            <span
                                key={major}
                                className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-950 dark:hover:text-violet-300 transition-all duration-150 cursor-default"
                            >
                                {major}
                            </span>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}