import Link from "next/link";

export default function Documents({ docs = [] }) {
  return (
    <div>

      <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
        Latest Documents
      </h1>

      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-red-700 text-white">
            <tr>
              <th className="px-4 py-3 text-center font-semibold">
                Document Name
              </th>
            </tr>
          </thead>

          <tbody>

            {docs.length === 0 ? (
              <tr>
                <td className="px-4 py-10 text-center">
                  No documents available.
                </td>
              </tr>
            ) : (
              docs.map((doc) => (

                <tr
                  key={doc.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-4 text-center font-medium">

                    <Link
                      href={`/document/${doc.slug}`}
                      prefetch={false}
                      className="text-blue-700 hover:underline"
                    >
                      {doc.title.rendered}
                    </Link>

                  </td>

                </tr>

              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}