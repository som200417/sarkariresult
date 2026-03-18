import { formatText } from "@/utils/formatText";

export default function PhysicalTable({ raw }) {
  if (!raw) return null;

  const lines = raw.split("\n").map(l => l.trim());

  let title = "";
  let header1 = [];
  let header2 = [];
  let rows = [];

  let mode = "";

  lines.forEach(line => {
    if (line === "#title") mode = "title";
    else if (line === "#header1") mode = "header1";
    else if (line === "#header2") mode = "header2";
    else if (line === "#rows") mode = "rows";
    else if (line) {
      if (mode === "title") title = line;
      if (mode === "header1") header1 = line.split("|").map(c => c.trim());
      if (mode === "header2") header2 = line.split("|").map(c => c.trim());
      if (mode === "rows") rows.push(line.split("|").map(c => c.trim()));
    }
  });

  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border border-black text-sm text-center">

        {/* Title */}
        <thead>
          <tr className="bg-[#6b0035] text-white font-bold">
            <th colSpan="5" className="p-2">
              {formatText(title)}
            </th>
          </tr>

          {/* Header 1 */}
          <tr className="bg-gray-200 font-bold">
            <th className="border p-2">{formatText(header1[0])}</th>
            <th colSpan="2" className="border p-2">
              {formatText(header1[1])}
            </th>
            <th colSpan="2" className="border p-2">
              {formatText(header1[3])}
            </th>
          </tr>

          {/* Header 2 */}
          <tr className="bg-gray-200 font-bold">
            {header2.map((col, i) => (
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
              {row.map((cell, j) => (
                <td key={j} className="border p-2 font-semibold">
                  {formatText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}