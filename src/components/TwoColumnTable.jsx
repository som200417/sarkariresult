export function TwoColumnTable({
  topTitleRed,
  topTitleGreen,
  topTitleBlue,
  leftTitle,
  rightTitle,
  leftItems = [],
  rightItems = [],
}) {
  const highlightLastDate = (text) => {
    if (!text) return text;

    if (text.toLowerCase().includes("last")) {
      return <span className="text-red-600 font-semibold">{text}</span>;
    }

    return text;
  };

  const renderList = (items = []) => (
    <ul className="list-disc pl-4 space-y-1">
      {items.map(([label, value], i) => (
        <li key={i}>
          {label && <b>{label}</b>}
          {value && (
            <>
              {" : "}
              {highlightLastDate(value)}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border border-black my-8">

      {/* TOP MULTI HEADER */}
      {(topTitleRed || topTitleGreen || topTitleBlue) && (
        <div className="text-center border-b border-black py-2 text-sm font-bold leading-6">
          {topTitleRed && <div className="text-red-700">{topTitleRed}</div>}
          {topTitleGreen && <div className="text-green-700">{topTitleGreen}</div>}
          {topTitleBlue?.text && (
            <div className="text-blue-700 hover:underline ">
              <a href={topTitleBlue.link} target="_blank" rel="noreferrer">
                {topTitleBlue.text}
              </a>
            </div>
          )}
        </div>
      )}

      {/* SECTION HEADERS – BRAND COLOR */}
      <div className="grid grid-cols-2 text-white text-sm font-bold">
        <div className="bg-[#6b0035] p-2 text-center border-r border-black">
          {leftTitle}
        </div>
        <div className="bg-[#6b0035] p-2 text-center">
          {rightTitle}
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-2 text-sm">
        <div className="border-r border-black p-3">
          {renderList(leftItems)}
        </div>
        <div className="p-3">
          {renderList(rightItems)}
        </div>
      </div>
    </div>
  );
}