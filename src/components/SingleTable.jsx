import { formatText } from "@/utils/formatText";
export function SingleTable({ title, rows, rightValue }) {
  return (
    <table className="w-full border border-black my-6 text-sm">
      <thead>
        <tr className="bg-green-700 text-white font-bold">
          <th className="border border-black p-2">
            {formatText(title)}
          </th>
          <th className="border border-black p-2 bg-orange-600">Total Post</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border border-black p-2">
            <ul className="list-disc ml-4">
              {rows.map((r, i) => (
                <li key={i}>
                  {formatText(r[0])} : {formatText(r[1])}
                </li>
              ))}
            </ul>
          </td>

          <td className="border border-black p-2 text-center font-bold">
            {formatText(rightValue)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}