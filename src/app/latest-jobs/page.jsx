import fs from "fs/promises";
import path from "path";
import JobsTable from "@/ui/JobsTable";
import Pagination from "@/components/Pagination";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Government Jobs 2026 | Sarkari Result",
  description:
    "Check latest government jobs, online forms, eligibility and last date updates.",
  alternates: {
    canonical: "https://sarkariresult6.com/latest-jobs",
  },
};

async function getJobs(page = 1) {
  try {

    const filePath = path.join(
      process.cwd(),
      "public/data/latest-jobs.json"
    );

    const file = await fs.readFile(filePath, "utf8");

    const allJobs = JSON.parse(file) || [];

    const perPage = 10;

    const start = (page - 1) * perPage;

    const jobs = allJobs.slice(start, start + perPage);

    const totalPages = Math.ceil(allJobs.length / perPage);

    return { jobs, totalPages };

  } catch (err) {

    console.error("Jobs JSON error:", err);

    return { jobs: [], totalPages: 1 };

  }
}

export default async function Page({ searchParams }) {

  const params = await searchParams;

  const page = Number(params?.page) || 1;

  const { jobs, totalPages } = await getJobs(page);

return (
  <div className="max-w-6xl mx-auto px-4 py-6">

    {/* PAGE TITLE */}
    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
      Latest Job
    </h1>

    {/* INTRO TEXT */}
    <div className="text-sm md:text-base leading-relaxed text-gray-900 mb-6 space-y-3">

      <p>
        Welcome to <a href="/"target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>. 
        Stay informed about the Latest Jobs of various competitive exams conducted by government bodies 
        across India, whether you are waiting for the Job Notification of any recruitment exam, entrance 
        exam or any other government exam then we update the Latest Job from time to time to keep you 
        informed. <a href="/blog" target="_blank" rel="noopener noreferrer"><span className="text-blue-700">Let's update.</span></a>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="/"target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a> में आपका स्वागत है। 
          भारत भर में सरकारी निकायों द्वारा आयोजित विभिन्न प्रतियोगी परीक्षाओं की नवीनतम नौकरियों के 
          बारे में सूचित रहें, चाहे आप किसी भी भर्ती परीक्षा, प्रवेश परीक्षा या किसी अन्य सरकारी 
          परीक्षा की नौकरी अधिसूचना की प्रतीक्षा कर रहे हों, तो हम आपको सूचित रखने के लिए समय-समय पर 
          नवीनतम नौकरी अपडेट करते हैं।
        </li>
      </ul>

    </div>

    {/* TABLE TITLE */}
    <h2 className="text-xl md:text-2xl font-bold mb-4 ">
      Latest Jobs
    </h2>

    {/* JOB TABLE */}
    <JobsTable jobs={jobs} />

    {/* PAGINATION */}
    <Pagination page={page} totalPages={totalPages} />

  </div>
);
}