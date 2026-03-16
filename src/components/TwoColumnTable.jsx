import { formatText } from "@/utils/formatText";

export function TwoColumnTable({
  topTitleRed,
  topTitleGreen,
  topTitleBlue,
  leftTitle,
  rightTitle,
  leftItems = [],
  rightItems = [],
}) {

  const renderList = (items = []) => (
    <ul className="list-disc pl-4 space-y-1">
      {items.map(([label, value], i) => (
        <li key={i}>
          {formatText(`${label} : ${value}`)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border border-black my-8">

      {/* TOP MULTI HEADER */}
      {(topTitleRed || topTitleGreen || topTitleBlue) && (
        <div className="text-center border-b border-black py-2 text-sm font-bold leading-6">
          {topTitleRed && <div className="text-red-700">{formatText(topTitleRed)}</div>}
          {topTitleGreen && <div className="text-green-700">{formatText(topTitleGreen)}</div>}

          {topTitleBlue?.text && (
            <div className="text-blue-700 hover:underline">
              <a href={topTitleBlue.link} target="_blank" rel="noreferrer">
                {formatText(topTitleBlue.text)}
              </a>
            </div>
          )}
        </div>
      )}

      {/* SECTION HEADERS */}
      <div className="grid grid-cols-2 text-white text-sm font-bold">
        <div className="bg-[#6b0035] p-2 text-center border-r border-black">
          {formatText(leftTitle)}
        </div>

        <div className="bg-[#6b0035] p-2 text-center">
          {formatText(rightTitle)}
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