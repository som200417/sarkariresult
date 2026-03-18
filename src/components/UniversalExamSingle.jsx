import { parseList } from "../utils/helpers";
import { TwoColumnTable } from "./TwoColumnTable";
import { SingleTable } from "./SingleTable";
import VacancyTable from "./VacancyTable";
import PhysicalTable from "./physicaltable";
import ImportantLinksTable from "./ImportantLinksTable";
import SimpleTable from "./SimpleTable";
import FAQTable from "./FAQTable";
import { formatText } from "@/utils/formatText";
import LinkSimpleTable from "./LinkSimpleTable";
import Image from "next/image";

export default function UniversalExamSingle({ post }) {
  const acf = post?.acf ?? {};

  /* ===== PARSE TEXTAREAS ===== */
  const importantDates = parseList(acf.important_dates ?? "");
  const rightDetails = parseList(acf.right_column_details ?? "");
  const ageLimit = parseList(acf.age_limit ?? "");
 const rawEligibility = acf.eligibility ?? "";

const isEligibilityTable = rawEligibility.includes("|");

let eligibility = [];

if (isEligibilityTable) {
  // TABLE MODE
  eligibility = rawEligibility
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => [line, ""]); // important
} else {
  // OLD MODE
  eligibility = parseList(rawEligibility);
}
  const examPattern = parseList(acf.exam_pattern ?? "");
  const markingScheme = parseList(acf.marking_scheme ?? "");

const rawVacancy = acf.vacancy_details ?? "";

// 🔥 Detect table format
const isTableFormat = rawVacancy.includes("|");

let vacancyRows = [];

if (isTableFormat) {
  // MULTI COLUMN MODE
  vacancyRows = rawVacancy
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => ({
      post_name: line, // पूरा row store
      post_count: "",
    }));
} else {
  // OLD FORMAT (NO CHANGE)
  vacancyRows = parseList(rawVacancy).map(([label, value]) => ({
    post_name: label,
    post_count: value,
  }));
}

  const getTitle = (acfTitle, fallback) =>
    acfTitle?.trim() ? acfTitle : fallback;

  const postTitle = post?.title?.rendered ?? "";

  return (
    <div className="site-container my-6">

      {/* SHORT INFORMATION */}
     {acf.short_information && (
  <div className="my-4 border-l-4 border-[#6b0035] bg-gray-50 p-4">
    <p className="text-sm leading-6">
      <span className="font-bold text-[#6b0035]">
        <a href="/">Sarkariresult6.com :</a>
      </span>{" "}
      {formatText(acf.short_information)}
    </p>
  </div>
)}
      {/* IMPORTANT DATES + RIGHT COLUMN */}
      {(importantDates.length > 0 || rightDetails.length > 0) && (
        <TwoColumnTable
          topTitleRed={acf.table_header?.red}
          topTitleGreen={acf.table_header?.green}
          topTitleBlue={{
            text: acf.table_header?.blue_text,
            link: acf.table_header?.blue_link,
          }}
          leftTitle={getTitle(acf.left_column_title, "Important Dates")}
          rightTitle={getTitle(acf.right_column_title, "Details")}
          leftItems={importantDates}
          rightItems={rightDetails}
        />
      )}

      {/* AGE LIMIT */}
      {ageLimit.length > 0 && (
        <SingleTable
          title={getTitle(acf.age_limit_title, "Age Limit")}
          rows={ageLimit}
          rightValue={acf.total_posts}
        />
      )}

      {/* VACANCY */}
      {vacancyRows.length > 0 && (
        <VacancyTable
          title={getTitle(
            acf.vacancy_title,
            `${postTitle} : Vacancy Details`
          )}
          vacancies={vacancyRows}
        />
      )}

      {acf.physical_table && (
  <PhysicalTable raw={acf.physical_table} />
)}

      {/* ELIGIBILITY */}
      {eligibility.length > 0 && (
        <SimpleTable
          title={getTitle(acf.eligibility_title, "Eligibility")}
          rows={eligibility}
        />
      )}

      {/* EXAM PATTERN */}
      {examPattern.length > 0 && (
        <SimpleTable
          title={getTitle(acf.exam_pattern_title, "Exam Pattern")}
          rows={examPattern}
        />
      )}

      {/* MARKING SCHEME */}
      {markingScheme.length > 0 && (
        <SimpleTable
          title={getTitle(acf.marking_scheme_title, "Marking Scheme")}
          rows={markingScheme}
        />
      )}

      {/* MODE OF SELECTION */}
      {acf.mode_of_selection && (
        <SimpleListTable
          title={getTitle(acf.mode_selection_title, "Mode Of Selection")}
          content={acf.mode_of_selection}
        />
      )}
      <LinkSimpleTable
  title="FOLLOW US FOR UPDATES"
  rows={[
    {
      label: "Join Our WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029VbCO5lUICVfkxi473f3g",
      cta: "Follow Now",
    },
    {
      label: "Join Our Telegram Channel",
      url: "https://t.me/SarkariResult6Official",
      cta: "Follow Now",
    },
  ]}
/>

      {/* HOW TO */}
      {acf.how_to_steps && (
        <SimpleListTable
          title={getTitle(acf.how_to_title, "How To Apply / Download")}
          content={acf.how_to_steps}
        />
      )}
     {/* IMPORTANT LINKS */}
      <ImportantLinksTable
        title={getTitle(
          acf.important_links_title,
          `${postTitle} : Important Links`
        )}
        acf={acf}
      />
      
      {/* FAQ */}
      {acf.faq && (
       <FAQTable 
  title={post.acf.faq_title || "Important Question"} 
  acf={post.acf} 
/>
      )}

  

{acf.post_image?.url && (
  <div className="my-6 flex justify-center">
    <Image
      src={acf.post_image.url}
      alt={acf.post_image.alt || "image"}
      width={1000}
      height={400}
      className="rounded border"
    />
  </div>
)}
     
    </div>
  );
}

/* ===== SIMPLE LIST TABLE ===== */
function SimpleListTable({ title, content }) {
  if (!content) return null;

  const list = content
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!list.length) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr>
            <th className="border border-black p-2 bg-blue-900 text-white text-center font-bold">
              {formatText(title)}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3">
              <ul className="list-disc list-inside space-y-1">
                {list.map((item, index) => (
                  <li key={index}>
                    {formatText(item)}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}