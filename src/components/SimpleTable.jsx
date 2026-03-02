export default function SimpleTable({ title, rows }) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="my-8">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="bg-[#6b0035] text-white font-bold text-center">
            <th className="border border-black p-2">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">
              <ul className="list-disc list-inside space-y-1">
                {rows.map(([label, value], index) => (
                  <li key={index}>
                    {label}
                    {value && ` : ${value}`}
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