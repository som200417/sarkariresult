export default function JobDetailTable({ job }) {
  const acf = job?.acf || {};

  const table =
    "w-full border border-gray-300 mb-6 text-sm border-collapse shadow-sm";
  
  const head =
    "bg-red-700 text-white font-semibold px-4 py-2 text-left";
  const label =
    "border border-gray-300 px-4 py-2 w-[35%] font-medium align-middle bg-gray-50";
  const value =
    "border border-gray-300 px-4 py-2 w-[65%] align-middle";
  const row = "hover:bg-gray-100 transition";

  return (
    <div className="mt-6">

      {/* IMPORTANT DATES */}
      <table className={table}>
        <tbody>
          <tr><th colSpan="2" className={head}>Important Dates</th></tr>
          <tr className={row}>
            <td className={label}>Last Date to Apply</td>
            <td className={value}>{acf.last_date || "-"}</td>
          </tr>
          {acf.important_dates_extra && (
            <tr className={row}>
              <td className={label}>Other Dates</td>
              <td className={value}>{acf.important_dates_extra}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* APPLICATION FEE */}
      <table className={table}>
        <tbody>
          <tr><th colSpan="2" className={head}>Application Fee</th></tr>
          <tr className={row}>
            <td className={label}>Fee Details</td>
            <td className={value}>{acf.application_fee || "-"}</td>
          </tr>
          {acf.fee_details && (
            <tr className={row}>
              <td className={label}>Category-wise</td>
              <td className={value} style={{ whiteSpace: "pre-line" }}>
                {acf.fee_details}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* AGE LIMIT */}
      <table className={table}>
        <tbody>
          <tr><th colSpan="2" className={head}>Age Limit</th></tr>
          <tr className={row}>
            <td className={label}>Age Limit</td>
            <td className={value}>{acf.age_limit || "-"}</td>
          </tr>
          {acf.age_relaxation && (
            <tr className={row}>
              <td className={label}>Age Relaxation</td>
              <td className={value} style={{ whiteSpace: "pre-line" }}>
                {acf.age_relaxation}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* VACANCY / ELIGIBILITY */}
      <table className={table}>
        <tbody>
          <tr><th colSpan="2" className={head}>Vacancy / Eligibility</th></tr>
          <tr className={row}>
            <td className={label}>Organization</td>
            <td className={value}>{acf.organization || "-"}</td>
          </tr>
          <tr className={row}>
            <td className={label}>Qualification</td>
            <td className={value}>{acf.qualification || "-"}</td>
          </tr>
          <tr className={row}>
            <td className={label}>Total Posts</td>
            <td className={value}>{acf.total_posts || "-"}</td>
          </tr>
        </tbody>
      </table>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {acf.apply_link && (
          <a
            href={acf.apply_link}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded"
          >
            Apply Online
          </a>
        )}
        {acf.notification_pdf && (
          <a
            href={acf.notification_pdf}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded"
          >
            Download Notification
          </a>
        )}
      </div>
    </div>
  );
}
