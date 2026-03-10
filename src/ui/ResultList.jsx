import Link from "next/link";

export default function Results({ results }) {

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center md:text-left">
        Latest Sarkari Results
      </h1>

      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="w-full text-sm border-collapse">

          <thead>
            <tr className="bg-red-700 text-white">
              <th className="border px-4 py-3 text-center font-semibold">
                Result Name
              </th>
            </tr>
          </thead>

          <tbody>

            {results.length === 0 ? (
              <tr>
                <td className="border px-4 py-10 text-center text-gray-600">
                  No results available right now.
                </td>
              </tr>
            ) : (
              results.map((item) => (

                <tr key={item.id} className="hover:bg-gray-50 transition">

                  <td className="border px-4 py-4 text-center font-medium">

                    <Link
                      href={`/results/${item.slug}`}
                      prefetch={false}
                      className="text-blue-700 hover:underline hover:text-blue-900"
                    >
                      {item.title.rendered}
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