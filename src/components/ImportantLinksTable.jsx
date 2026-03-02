export default function ImportantLinksTable({ title, acf }) {
  const links = [
    ["Apply Online", acf.apply_link],
    ["Official Notification", acf.notification_pdf],
    ["Revised Vacancy Notice", acf.revised_vacancy_notice],
    ["Revised Date Notice", acf.revised_date_notice],
    ["Official Website", acf.official_website],
  ];

  return (
    <div className="my-6">
      <table className="w-full border border-black text-sm bg-yellow-200">
        <thead>
          <tr className="bg-yellow-300 text-center font-bold">
            <th colSpan="2" className="border border-black p-2">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {links.map(
            ([label, url], idx) =>
              url && (
                <tr key={idx}>
                  <td className="border border-black p-2 font-semibold w-1/2">
                    {label}
                  </td>
                  <td className="border border-black p-2 text-blue-700">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold"
                    >
                      Click Here
                    </a>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
