export default function EligibilityTable({ title, eligibility }) {
  if (!eligibility) return null;

  const list = eligibility
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  if (list.length === 0) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="bg-blue-900 text-white font-bold text-center">
            <th className="border border-black p-2">
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