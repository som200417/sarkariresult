import Link from "next/link";

export default function AdmitCards({ cards = [] }) {

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">

        <table className="w-full table-fixed text-xs sm:text-sm md:text-base">

          <thead>
            <tr className="bg-red-700 text-white">
              <th className="border px-4 py-3 text-left">Exam / Post Name</th>
              <th className="border px-4 py-3 text-left">Organization</th>
              <th className="border px-4 py-3 text-center">Exam Date</th>
              <th className="border px-4 py-3 text-center">Status</th>
              <th className="border px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {cards.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10">
                  No admit cards available right now.
                </td>
              </tr>
            ) : (
              cards.map((card) => {

                const acf = card.acf || {};
                const status =
                  acf.status ||
                  (acf.download_link ? "Available" : "Not Released");

                return (

                  <tr key={card.id} className="hover:bg-gray-50">

                    <td className="border px-4 py-3 font-medium">

                      <Link
                        href={`/admit-card/${card.slug}`}
                        className="text-blue-700 hover:underline"
                      >
                        {card.title.rendered}
                      </Link>

                    </td>

                    <td className="border px-4 py-3">
                      {acf.organization || acf.board || "—"}
                    </td>

                    <td className="border px-4 py-3 text-center">
                      {acf.exam_date || "—"}
                    </td>

                    <td className="border px-4 py-3 text-center">
                      {status}
                    </td>

                    <td className="border px-4 py-3 text-center">

                      <Link
                        href={`/admit-card/${card.slug}`}
                        className="bg-green-600 text-white px-4 py-1.5 rounded text-sm"
                      >
                        Click
                      </Link>

                    </td>

                  </tr>

                );
              })
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}