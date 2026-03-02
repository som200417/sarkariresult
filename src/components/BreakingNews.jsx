export default function BreakingNews({ data }) {
  // data = homeData.breaking_news

  if (!data || !Array.isArray(data) || data.length === 0) return null;

  // 🔥 priority sort (same logic)
  const sorted = [...data].sort(
    (a, b) =>
      Number(a.acf?.priority || 99) -
      Number(b.acf?.priority || 99)
  );

  return (
    <div className="flex items-center bg-red-700 text-white overflow-hidden">
      {/* LEFT LABEL */}
      <div className="bg-black px-4 py-2 font-bold whitespace-nowrap">
        BREAKING NEWS
      </div>

      {/* MARQUEE */}
      <div className="relative flex-1 overflow-hidden">
        <div className="flex gap-10 px-4 py-2 animate-marquee whitespace-nowrap will-change-transform">
          {sorted.map((item) => (
            <a
              key={item.id}
              href={item.acf?.news_link || "#"}
              target="_blank"
              rel="noreferrer"
              className="
                font-bold
                hover:underline
                hover:text-yellow-300
                transition
                flex items-center
              "
            >
              <span
                className="
                  mr-2 w-2 h-2 bg-yellow-500 rounded-full
                  animate-pulse
                  shadow-[0_0_6px_2px_rgba(250,204,21,0.9)]
                "
              />
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}