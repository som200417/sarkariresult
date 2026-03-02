const colors = {
  red: "bg-red-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  orange: "bg-orange-500",
  teal: "bg-teal-600",
  pink: "bg-pink-500",
  yellow: "bg-yellow-500",
};

export default function HighlightCards({ data }) {
  // data = homeData.highlights

  if (!data || !data.length) return null;

  const highlightCards = data?.[0]?.acf?.highlight_cards;
  if (!highlightCards) return null;

  const cards = [];

  for (let i = 1; i <= 8; i++) {
    const title = highlightCards[`card_${i}_title`];
    const link =
      highlightCards[`card_${i}_link`] ||
      highlightCards[`card_${i}_url`] ||
      highlightCards[`_card_${i}_url`];

    const color = highlightCards[`card_${i}_color`];

    if (title && link) {
      cards.push({ title, link, color });
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {cards.map((c, index) => (
        <a
          key={index}
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${colors[c.color] || "bg-gray-600"}
            text-white text-center p-3 rounded font-semibold text-sm
            no-underline
            transition-all duration-200 ease-in-out
            hover:text-slate-900
            hover:underline
            hover:decoration-blue-600
            hover:decoration-2
            hover:underline-offset-4
            hover:opacity-95
          `}
        >
          {c.title}
        </a>
      ))}
    </div>
  );
}