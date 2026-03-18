import { formatText } from "@/utils/formatText";

export default function SimpleTable({ title, rows = [] }) {
  if (!Array.isArray(rows) || rows.length === 0) return null;

  // 🔥 Detect table format
  const isTable = rows.some(([label]) => label?.includes("|"));

  // ======================
  // ✅ TABLE MODE
  // ======================
  if (isTable) {
    const columns = rows[0][0].split("|").map(c => c.trim());

    const dataRows = rows.slice(1).map(([label]) =>
      label.split("|").map(c => c.trim())
    );

    return (
      <div className="my-8 overflow-x-auto">
        <table className="w-full border border-black text-sm">

          {/* Title */}
          <thead>
            <tr className="bg-[#6b0035] text-white font-bold text-center">
              <th colSpan={columns.length} className="border p-2">
                {formatText(title)}
              </th>
            </tr>

            {/* Header */}
            <tr className="bg-gray-200 font-bold text-center">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`border p-2 ${
                    i === 0 ? "w-[30%]" : "w-[70%]"
                  }`}
                >
                  {formatText(col)}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {dataRows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => {
                  const isLink = cell?.startsWith("http");
                  const isLast = j === row.length - 1;

                  // 🔥 BULLET USING ;
                  const points = cell
                    .split(";")
                    .map(p => p.trim())
                    .filter(Boolean);

                  return (
                    <td
                      key={j}
                      className={`border p-2 font-semibold align-top ${
                        j === 0
                          ? "w-[30%] text-center"
                          : "w-[70%] text-left"
                      }`}
                    >
                      {isLink && isLast ? (
                        <a
                          href={cell}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline font-semibold"
                        >
                          Click Here
                        </a>
                      ) : points.length > 1 ? (
                        <ul className="list-disc list-inside text-left space-y-1">
                          {points.map((point, idx) => (
                            <li key={idx}>{formatText(point)}</li>
                          ))}
                        </ul>
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
  // ✅ DEFAULT LIST MODE
  // ======================
  return (
    <div className="my-8">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="bg-[#6b0035] text-white font-bold text-center">
            <th className="border border-black p-2">
              {formatText(title)}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3">
              <ul className="list-disc list-inside space-y-1">
                {rows.map(([label, value], index) => (
                  <li key={index}>
                    {formatText(label)}
                    {value && ` : `}
                    {value && formatText(value)}
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