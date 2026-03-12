import Documents from "@/ui/Documents";

const API = "https://api.sarkariresult6.com/wp-json/wp/v2/documents";

export const revalidate = 300;
export const dynamic = "force-static";

export const metadata = {
  title: "Latest Documents – Sarkari Result",
  description:
    "Download latest government documents, notices and official PDFs.",
  alternates: {
    canonical: "https://sarkariresult6.com/documents",
  },
};

async function getDocuments() {
  const res = await fetch(
    `${API}?orderby=date&order=desc&per_page=20&_fields=id,slug,title.rendered`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function DocumentsPage() {
  const docs = await getDocuments();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
<h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
     Documents
    </h1>

    {/* INTRO TEXT */}
    <div className="text-sm md:text-base leading-relaxed text-gray-900 mb-6 space-y-3">

      <p>
        Welcome to <a href="/"target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a>. 
        Stay informed about the Documents of various competitive exams conducted by government bodies 
        across India, whether you are waiting for the Documents Notification of any recruitment exam, entrance 
        exam or any other government exam then we update the Documents from time to time to keep you 
        informed. <a href="/blog" target="_blank" rel="noopener noreferrer"><span className="text-blue-700">Let's update.</span></a>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="/"target="_blank"
              rel="noopener noreferrer"><span className="font-semibold text-blue-700">Sarkari Result6</span></a> यह पेज भारत भर में विभिन्न सरकारी विभागों द्वारा जारी किए गए महत्वपूर्ण दस्तावेज़, नोटिस और आधिकारिक पीडीएफ की जानकारी प्रदान करता है। यदि आप किसी भर्ती, परीक्षा या सरकारी प्रक्रिया से जुड़े दस्तावेज़ खोज रहे हैं, तो हम आपको नवीनतम अपडेट समय-समय पर उपलब्ध कराते हैं ताकि आपको सही जानकारी जल्दी मिल सके।
              </li>
      </ul>

    </div>
      <Documents docs={docs} />

    </div>
  );
}