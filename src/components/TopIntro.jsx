export default function TopIntro() {
  return (
    <div className="text-center py-4 px-2">

      {/* INTRO TEXT */}
      <p className="text-sm md:text-base font-semi-bold text-gray-800">
        <span className="font-bold" >Sarkari Result6 Official 
            </span> Get Online Form, Results, Admit Card, Answer Key,
        Syllabus, Career News, Sarkari Yojana, Scholarship, Sarkari Notice etc.
      </p>

      {/* LIVE BADGE */}
      <div className="mt-1">
        <span className="text-red-600 font-bold animate-pulse">
          ● LIVE
        </span>
      </div>

      {/* WHATSAPP BUTTON */}
      <div className="mt-3">
        <a
          href="https://whatsapp.com/channel/0029VbCO5lUICVfkxi473f3g"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold"
        >
          Join WhatsApp
        </a>
      </div>

      {/* TOOLS LINK */}
      <div className="mt-2">
        <a
          href="blog"
          className="text-blue-700 font-semibold hover:underline"
        >
          SarkariResult6 Tools
        </a>
      </div>
    </div>
  );
}
