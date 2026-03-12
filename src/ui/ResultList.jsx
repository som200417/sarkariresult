import Link from "next/link";

export default function Results({ results }) {

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
       <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
       Latest  Results
      </h1>

      {/* INTRO TEXT */}
      <div className="text-sm md:text-base leading-relaxed text-gray-900 mb-6 space-y-3">

        <p>
          Welcome to <a href="/" target="_blank"
            rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>.
         Stay informed about the latest Results of various competitive exams conducted by government bodies across India. Whether you are waiting for the result of a recruitment exam, entrance exam, or any other government examination, we regularly update the latest results so that you can quickly check your result and stay updated with official announcements. <a href="/blog" target="_blank" rel="noopener noreferrer"><span className="text-blue-700">Let's update.</span></a>
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/" target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>यह पेज भारत भर में विभिन्न सरकारी विभागों और संगठनों द्वारा आयोजित परीक्षाओं के नवीनतम परिणाम (Results) की जानकारी प्रदान करता है। यदि आप किसी भर्ती परीक्षा, प्रवेश परीक्षा या अन्य सरकारी परीक्षा के रिजल्ट का इंतजार कर रहे हैं, तो हम समय-समय पर नवीनतम परिणाम अपडेट करते रहते हैं ताकि आप आसानी से अपना रिजल्ट देख सकें और सही जानकारी प्राप्त कर सकें।
          </li>
        </ul>

      </div>

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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline visited:text-purple-700"
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