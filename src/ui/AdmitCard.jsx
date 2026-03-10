import Link from "next/link";

export default function AdmitCards({ cards = [] }) {

  if (cards.length === 0) {
    return (
      <div className="text-center py-10">
        No admit cards available right now.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6">

      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">

        <table className="w-full text-xs sm:text-sm md:text-base">

          <thead>
            <tr className="bg-red-700 text-white">

              <th className="border px-4 py-3 text-left">
                Exam / Post Name
              </th>

              {/* hidden on mobile */}
              <th className="border px-4 py-3 text-left hidden sm:table-cell">
                Organization
              </th>

              {/* hidden on mobile */}
              <th className="border px-4 py-3 text-center hidden sm:table-cell">
                Exam Date
              </th>

              {/* hidden on mobile */}
              <th className="border px-4 py-3 text-center hidden sm:table-cell">
                Status
              </th>

              {/* hidden on mobile */}
              <th className="border px-4 py-3 text-center hidden sm:table-cell">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {cards.map((card) => {

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

                  <td className="border px-4 py-3 hidden sm:table-cell">
                    {acf.organization || acf.board || "—"}
                  </td>

                  <td className="border px-4 py-3 text-center hidden sm:table-cell">
                    {acf.exam_date || "—"}
                  </td>

                  <td className="border px-4 py-3 text-center hidden sm:table-cell">
                    {status}
                  </td>

                  <td className="border px-4 py-3 text-center hidden sm:table-cell">

                    <Link
                      href={`/admit-card/${card.slug}`}
                      className="bg-green-600 text-white px-4 py-1.5 rounded text-sm"
                    >
                      Click
                    </Link>

                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}