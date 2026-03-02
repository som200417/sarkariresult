export default function ModeOfSelectionTable({ title, selection }) {
  if (!selection) return null;

  const list = selection
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  if (list.length === 0) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr>
            <th className="border border-black p-2 bg-blue-900 text-white text-center font-bold">
              {title}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3">
              <ul className="list-disc list-inside space-y-1">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}