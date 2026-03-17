export default function ImportantLinksTable({ title, acf }) {

  const rawLinks = acf?.important_links || "";

  const links = rawLinks
  .split("\n")
  .map((line) => {
    const parts = line.split(":");
    const label = parts.shift()?.trim();
    const url = parts.join(":").trim();

    return { label, url };
  })
  .filter((link) => link.label && link.url);
  if (!links.length) return null;

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
          {links.map((link, idx) => (
            <tr key={idx}>
              <td className="border border-black p-2 font-semibold w-1/2 text-center">
                {link.label}
              </td>

              <td className="border border-black p-2 text-blue-700 text-center">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Click Here
                </a>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}