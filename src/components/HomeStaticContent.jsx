import { parseLinkList } from "../utils/helpers";

export default function HomeStaticContent({ highlights }) {
  // highlights = homeData.highlights

  const highlight = highlights?.[0];
  const topTable = highlight?.acf?.top_result_table;

  return (
    <div className="site-container my-6 text-sm leading-6">

      {/* INTRO */}
      <div className="border p-4 mb-4">
        <p>
          <b>Sarkari Result6 2026 :</b> Find Latest Sarkari Job Vacancies And
          Sarkari Exam Results At SarkariResult6.Com Get All The Information
          You Need On Govt Jobs And Online Form, Exam, Results, Admit Card In
          One Place.
        </p>
      </div>

      {/* TOP SARKARI RESULT PAGES */}
      {topTable && (
        <div className="border mb-6">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
            {parseLinkList(topTable).map((item, i) => (
              <div
                key={i}
                className="border border-black px-2 py-2 text-center"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-blue-700
                    font-medium
                    transition-all
                    duration-200
                    hover:text-blue-900
                    hover:underline
                    hover:decoration-blue-700
                    hover:underline-offset-4
                  "
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RED INFO SECTIONS */}
      {[
        {
          title: "Sarkari Results 10+2 Latest Job",
          content: (
            <>
              <p>
                <strong>Sarkari Result 2026</strong>, <strong>Government Job Notifications</strong>, 
                Online Application Forms, Offline Forms, Results, Admit Cards, Answer Keys, 
                Admissions and Scholarship Forms – all official notices are available at one place on{" "}
                <strong>SarkariResult6.com</strong>.
              </p>

              <p className="mt-4">
                Our platform provides fast and accurate updates about{" "}
                <strong>Sarkari Results</strong>, <strong>Government Exams</strong>, 
                and Board Results including <strong>10th and 12th results</strong>.
              </p>
            </>
          )
        },
        {
          title: "Sarkari Result6",
          content: (
            <p>
              <strong>SarkariResult6.com</strong> is a popular platform in India that 
              provides accurate information such as <strong>latest government jobs</strong>, 
              <strong> Sarkari Results 2026</strong>, upcoming forms, exam dates and notifications.
            </p>
          )
        },
        {
          title: "Sarkari Result Rajasthan",
          content: (
            <p>
              All information related to <strong>Government Exam Results in Rajasthan</strong> 
              including Rajasthan Board Results, RPSC Jobs, Rajasthan Police Recruitment 2026
              and other state government notifications is available here.
            </p>
          )
        },
        {
          title: "Sarkari Result Bihar",
          content: (
            <p>
              Every update related to <strong>Government Exam Results in Bihar</strong> 
              including Bihar Board Results, Bihar Police Recruitment 2026 and other updates
              is provided in one place.
            </p>
          )
        },
        {
          title: "Sarkari Result Hindi",
          content: (
            <p>
              Millions of candidates search for <strong>Sarkari Result India</strong>, 
              exam notifications, admit cards and results every year. This platform provides
              all updates in simple and easy language.
            </p>
          )
        },
        {
          title: "SarkariResult6 Official Website",
          content: (
            <>
              <p>
                <strong>SarkariResult6.com</strong> provides latest job notifications,
                results, online forms and exam updates.
              </p>

              <p className="mt-4">
                This website is <strong>not associated with any government organization</strong>.
                Users are advised to verify information from official sources.
              </p>
            </>
          )
        },
      ].map((sec, i) => (
        <div
          key={i}
          className="mb-8 bg-white border rounded-md shadow-sm overflow-hidden"
        >
          <div className="bg-[#6b0035] text-white text-center font-bold py-3 text-lg">
            {sec.title}
          </div>
          <div className="p-6 text-[15px] leading-7 text-gray-800 text-justify">
            {sec.content}
          </div>
        </div>
      ))}

      {/* FAQ */}
      <div className="border p-4">
        <h2 className="text-lg font-bold mb-2">FAQ – Sarkari Result</h2>

        <p><b>What is Sarkari Result6?</b></p>
        <p>
          Sarkari Result6 provides latest government job vacancies and exam results.
        </p>

        <p className="mt-3"><b>How can I check the latest government job vacancies?</b></p>
        <p>
          Visit the Latest Jobs section on SarkariResult6.com.
        </p>

        <p className="mt-3"><b>Is Sarkari Result6 free to use?</b></p>
        <p>Yes, it is completely free.</p>
      </div>

    </div>
  );
}