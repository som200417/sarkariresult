export default function FAQTable({ title, faq }) {
  if (!faq) return null;

  const rows = [];
  for (let i = 1; i <= 10; i++) {
    const q = faq[`question_${i}`];
    const a = faq[`answer_${i}`];
    if (q && a) rows.push({ q, a });
  }

  if (rows.length === 0) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="bg-blue-900 text-white text-center font-bold">
            <th colSpan="2" className="border border-black p-2">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td className="border border-black p-2 font-semibold w-1/3">
                {row.q}
              </td>
              <td className="border border-black p-2">
                {row.a}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
