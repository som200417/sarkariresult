import { formatText } from "@/utils/formatText";

export default function LinkSimpleTable({ title, rows = [] }) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">

        {/* 🔥 Title */}
        {title && (
          <thead>
            <tr>
              <th
                colSpan="2"
                className="border border-black p-2 text-center font-bold text-red-600 bg-gray-100"
              >
                {formatText(title)}
              </th>
            </tr>
          </thead>
        )}

        {/* 🔥 Body */}
        <tbody>
          {rows.map((item, index) => (
            <tr key={index} className="text-center">

              {/* LEFT */}
              <td className="border border-black p-2 font-semibold text-red-600">
                {formatText(item.label)}
              </td>

              {/* RIGHT */}
              <td className="border border-black p-2">
                <a
                  href={item.url}
                  target="_blank"
                  className="text-blue-700 font-bold underline hover:text-blue-900"
                >
                  {item.cta || "Click Here"}
                </a>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}