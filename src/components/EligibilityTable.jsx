import { formatText } from "@/utils/formatText";

export default function EligibilityTable({ title, eligibility }) {
  if (!eligibility) return null;

  const lines = eligibility
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  // 🔥 Detect table format
  const isTable = lines.some(line => line.includes("|"));

  // ======================
  // ✅ TABLE MODE
  // ======================
  if (isTable) {
    const columns = lines[0].split("|").map(c => c.trim());
    const rows = lines.slice(1).map(line =>
      line.split("|").map(c => c.trim())
    );

    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border border-black text-sm text-center">

          {/* Title */}
          <thead>
            <tr className="bg-blue-900 text-white font-bold">
              <th colSpan={columns.length} className="border p-2">
                {formatText(title)}
              </th>
            </tr>

            {/* Header */}
            <tr className="bg-gray-200 font-bold">
              {columns.map((col, i) => (
                <th key={i} className="border p-2">
                  {formatText(col)}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => {
                  const isLink = cell?.startsWith("http");
                  const isLast = j === row.length - 1;

                  return (
                    <td
                      key={j}
                      className="border p-2 font-semibold text-center"
                    >
                      {isLink && isLast ? (
                        <a
                          href={cell}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
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
            ))}
          </tbody>

        </table>
      </div>
    );
  }

  // ======================
  // ✅ LIST MODE (OLD)
  // ======================
  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="bg-blue-900 text-white font-bold text-center">
            <th className="border border-black p-2">
              {formatText(title)}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3">
              <ul className="list-disc list-inside space-y-1">
                {lines.map((item, index) => (
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