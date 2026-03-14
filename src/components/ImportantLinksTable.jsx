export default function ImportantLinksTable({ title, acf }) {

  const links = acf.important_links
    ?.split("\n")
    .map(line => {
      const [label, url] = line.split("|").map(item => item.trim());
      return { label, url };
    })
    .filter(link => link.label && link.url);

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
          {links?.map((link, idx) => (
            <tr key={idx}>
              <td className="border border-black p-2 font-semibold w-1/2">
                {link.label}
              </td>

              <td className="border border-black p-2 text-blue-700">
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