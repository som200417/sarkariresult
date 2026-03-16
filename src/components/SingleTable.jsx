export function SingleTable({ title, rows, rightValue }) {

  const formatText = (text) => {
    if (!text) return text;

    // Highlight
    if (text.toLowerCase().includes("[highlight]")) {
      const clean = text
        .replace(/\[highlight\]/gi, "")
        .replace(/\[\/highlight\]/gi, "");

      return (
        <span className="bg-yellow-300 font-semibold px-1">
          {clean}
        </span>
      );
    }

    // Red text
    if (text.toLowerCase().includes("[red]")) {
      const clean = text
        .replace(/\[red\]/gi, "")
        .replace(/\[\/red\]/gi, "");

      return (
        <span className="text-red-600 font-semibold">
          {clean}
        </span>
      );
    }

    return text;
  };

  return (
    <table className="w-full border border-black my-6 text-sm">
      <thead>
        <tr className="bg-green-700 text-white font-bold">
          <th className="border border-black p-2">{title}</th>
          <th className="border border-black p-2">Total Post</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border border-black p-2">
            <ul className="list-disc ml-4">
              {rows.map((r, i) => (
                <li key={i}>
                  {formatText(r[0])} : {formatText(r[1])}
                </li>
              ))}
            </ul>
          </td>

          <td className="border border-black p-2 text-center font-bold">
            {formatText(rightValue)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}