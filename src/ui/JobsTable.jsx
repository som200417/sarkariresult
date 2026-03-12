import Link from "next/link";

export default function JobsTable({ jobs }) {

  return (
    <div className="overflow-x-auto">

      <table className="w-full border text-sm">

        <thead>
          <tr className="bg-red-700 text-white">
            <th className="border px-3 py-2">Post Name</th>
            <th className="border px-3 py-2">Organization</th>
            <th className="border px-3 py-2">Last Date</th>
            <th className="border px-3 py-2">Posts</th>
          </tr>
        </thead>

        <tbody>

          {jobs.map(job => (

            <tr key={job.id}>

              <td className="border px-3 py-2">

                <Link
                  href={`/latest-jobs/${job.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="text-blue-700 text:bold hover:underline visited:text-purple-700"

                >
                  {job.title.rendered}
                </Link>

              </td>

              <td className="border px-3 py-2">
                {job.acf?.organization || "-"}
              </td>

              <td className="border px-3 py-2">
                {job.acf?.last_date || "-"}
              </td>

              <td className="border px-3 py-2">
                {job.acf?.total_posts || "-"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}