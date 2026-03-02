export function SingleTable({ title, rows, rightValue }) {
  return (
    <table className="w-full border border-black my-6 text-sm">
      <thead>
        <tr className="bg-green-700 text-white font-bold">
          <th className="border border-black p-2">{title}</th>
          <th className="border border-black p-2">Total Post</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black p-2">
            <ul className="list-disc ml-4">
              {rows.map((r, i) => (
                <li key={i}>{r[0]}: {r[1]}</li>
              ))}
            </ul>
          </td>
          <td className="border border-black p-2 text-center font-bold">
            {rightValue}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
