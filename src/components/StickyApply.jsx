export default function StickyApply({ link }) {
  if (!link) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t p-3 z-50">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block text-center bg-green-600 text-white font-bold py-3 rounded"
      >
        Apply Online
      </a>
    </div>
  );
}
