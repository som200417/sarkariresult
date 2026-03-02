export default function VacancyTable({ title, vacancies }) {
  if (!vacancies || vacancies.length === 0) return null;

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm">
        <thead>
          <tr className="bg-[#6b0035] text-white text-center font-bold">
            <th colSpan="2" className="border border-black p-2">
              {title}
            </th>
          </tr>
          <tr className="bg-gray-200 font-bold text-center">
            <th className="border border-black p-2">Post Name</th>
            <th className="border border-black p-2">No. of Post</th>
          </tr>
        </thead>

        <tbody>
          {vacancies.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border border-black p-2 text-left">
                {row.post_name}
              </td>
              <td className="border border-black p-2 font-semibold">
                {row.post_count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}