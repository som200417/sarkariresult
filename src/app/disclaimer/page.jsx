export const metadata = {
  title: "Disclaimer - SarkariResult6.com",
  description: "Official Disclaimer of SarkariResult6.com",
  alternates: {
    canonical: "https://sarkariresult6.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="site-container py-10 px-4">

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Disclaimer – SarkariResult6.com
      </h1>

      {/* Styled Info Box */}
      <div className="bg-gray-100 border-l-4 border-[#6b0035] p-6 text-[15px] leading-7 text-gray-800 shadow-sm">

        <p>
          <span className="font-bold text-[#6b0035]">
            SarkariResult6.com :
          </span>{" "}
          SarkariResult6.com is a private website. The content on this website
          is for informational purposes only and is compiled from reliable
          sources. We strive to ensure that the information is accurate. We make
          no representations or warranties whatsoever regarding the completeness,
          accuracy, specificity, suitability, or availability of the information.
        </p>

        <p className="mt-4">
          <span className="font-bold text-[#6b0035]">
            SarkariResult6.com :
          </span>{" "}
          SarkariResult6.com एक निजी वेबसाइट है। इस वेबसाइट पर दी गई सामग्री
          केवल सूचनात्मक उद्देश्यों के लिए है और विश्वसनीय स्रोतों से संकलित की गई है।
          हम यह सुनिश्चित करने का प्रयास करते हैं कि जानकारी सटीक हो। हम जानकारी की
          पूर्णता, सटीकता, विशिष्टता, उपयुक्तता या उपलब्धता के संबंध में किसी भी प्रकार
          का प्रतिनिधित्व या वारंटी नहीं देते हैं।
        </p>

        <p className="mt-4 font-semibold text-[#6b0035]">
          TeamSarkariResult6.com
        </p>

        <p className="mt-4">
          Users are encouraged to carefully verify information before making any
          decisions based on this website. We are not responsible for any errors
          or errors obtained from information on this website. Therefore, any
          unfounded reliance on such information is entirely at your own risk.
          Please verify the information on the official website before making
          any decisions.
        </p>

        <p className="mt-4">
          उपयोगकर्ताओं को इस वेबसाइट पर दी गई जानकारी के आधार पर कोई भी निर्णय लेने
          से पहले उसे ध्यानपूर्वक सत्यापित करने की सलाह दी जाती है। इस वेबसाइट पर दी गई
          जानकारी में किसी भी प्रकार की त्रुटि या गलती के लिए हम जिम्मेदार नहीं हैं।
          इसलिए, ऐसी जानकारी पर बिना सोचे-समझे भरोसा करना पूरी तरह से आपके अपने जोखिम
          पर है। कृपया कोई भी निर्णय लेने से पहले आधिकारिक वेबसाइट पर दी गई जानकारी को
          सत्यापित करें।
        </p>

      </div>

    </div>
  );
}