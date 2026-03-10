import Link from "next/link";

export default function AnswerKeys({ keys = [] }) {

  return (
    <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">

      <table className="w-full text-sm border-collapse">

        <thead>
          <tr className="bg-red-700 text-white">
            <th className="border px-4 py-3 text-center">
              Exam / Answer Key Name
            </th>
          </tr>
        </thead>

        <tbody>

          {keys.length === 0 ? (
            <tr>
              <td className="border px-4 py-10 text-center">
                No answer keys available.
              </td>
            </tr>
          ) : (
            keys.map((item) => (

              <tr key={item.id} className="hover:bg-gray-50">

                <td className="border px-4 py-4 text-center font-medium">

                  <Link
                    href={`/answer-key/${item.slug}`}
                    prefetch={false}
                    className="text-blue-700 hover:underline"
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
  );
}