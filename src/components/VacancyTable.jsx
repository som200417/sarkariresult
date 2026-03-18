import { formatText } from "@/utils/formatText";

export default function VacancyTable({ title, vacancies = [] }) {
  if (!Array.isArray(vacancies) || vacancies.length === 0) return null;

  // 🔥 Detect multi-column
  const isMultiColumn = vacancies.some(row =>
    row.post_name?.includes("|")
  );

  let columns = [];
  let dataRows = vacancies;

  if (isMultiColumn) {
    // ✅ First row = header
    const firstRow = vacancies[0]?.post_name
      ?.split("|")
      .map(c => c.trim());

    columns = firstRow || [];

    // बाकी rows = data
    dataRows = vacancies.slice(1);
  } else {
    columns = ["Post Name", "No. of Post"];
  }

  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border border-black text-sm">

        {/* 🔥 Title */}
        <thead>
          <tr className="bg-[#6b0035] text-white font-bold text-center">
            <th colSpan={columns.length} className="p-2">
              {formatText(title)}
            </th>
          </tr>

          {/* 🔥 Header */}
          <tr className="bg-gray-200 font-bold text-center">
            {columns.map((col, i) => (
              <th key={i} className="border border-black p-2 text-center">
                {formatText(col)}
              </th>
            ))}
          </tr>
        </thead>

        {/* 🔥 Body */}
        <tbody>
          {dataRows.map((row, index) => {
            let cells = [];

            if (isMultiColumn) {
              cells = row.post_name
                ?.split("|")
                .map(c => c.trim());
            } else {
              cells = [row.post_name, row.post_count];
            }

            return (
              <tr key={index} className="text-center">
                {cells.map((cell, i) => {
                  const isLink = cell?.startsWith("http");
                  const isLastCol = i === cells.length - 1;

                  return (
                    <td
                      key={i}
                      className="border border-black p-2 font-semibold text-center align-middle"
                    >
                      {isLink && isLastCol ? (
                        <a
                          href={cell}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline font-semibold"
                        >
                          Click Here
                        </a>
                      ) : (
                        formatText(cell)
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}