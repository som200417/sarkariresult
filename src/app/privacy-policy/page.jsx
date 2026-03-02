export const metadata = {
  title: "Privacy Policy - SarkariResult6.com",
  description: "Privacy Policy of SarkariResult6.com",
  alternates: {
    canonical: "https://sarkariresult6.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="site-container py-10 px-4">

      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>

      <div className="bg-gray-100 border-l-4 border-[#6b0035] p-6 text-[15px] leading-7 text-gray-800 shadow-sm">

        {/* Sub Heading */}
        <h2 className="font-bold mb-3">
          Privacy Policy For{" "}
          <span className="font-bold">SarkariResult6.com</span>
        </h2>

        <p>
          At <span className="font-bold">SarkariResult6.com</span>, we fully
          respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains what information we collect
          about you when you visit our website and how we use it.
        </p>

        <h3 className="font-bold mt-5">
          Information We Collect
        </h3>

        <p className="mt-2">
          When you visit our website or fill out contact forms, your name, email
          address, and mobile number are collected.
        </p>

        <h3 className="font-bold mt-5">
          How the information is used
        </h3>

        <p className="mt-2">
          We use your information in the following ways:
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>To improve our website and provide you with better information</li>
          <li>To send you periodic notifications</li>
        </ul>

        <h3 className="font-bold mt-5">
          How we protect your information
        </h3>

        <p className="mt-2">
          Your personal information is contained within. We implement various
          security measures to protect your personal information.
        </p>

        <hr className="my-6 border-gray-300" />

        {/* Hindi Section */}
        <p>
          <span className="font-bold">SarkariResult6.com</span> पर हम आपकी निजता
          का पूरा सम्मान करते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए
          प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर आते
          हैं तो हम आपके बारे में कौन सी जानकारी एकत्र करते हैं और उसका उपयोग कैसे
          करते हैं।
        </p>

        <h3 className="font-bold mt-5">
          हम जो जानकारी एकत्र करते हैं
        </h3>

        <p className="mt-2">
          जब आप हमारी वेबसाइट पर जाते हैं या संपर्क फ़ॉर्म भरते हैं, तो आपका नाम,
          ईमेल पता और मोबाइल नंबर एकत्र किया जाता है।
        </p>

        <h3 className="font-bold mt-5">
          जानकारी का उपयोग कैसे किया जाता है
        </h3>

        <p className="mt-2">
          हम आपकी जानकारी का उपयोग निम्नलिखित तरीकों से करते हैं:
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>अपनी वेबसाइट को बेहतर बनाने और आपको बेहतर जानकारी प्रदान करने के लिए</li>
          <li>आपको समय-समय पर सूचनाएं भेजने के लिए</li>
        </ul>

        <h3 className="font-bold mt-5">
          हम आपकी जानकारी की सुरक्षा कैसे करते हैं
        </h3>

        <p className="mt-2">
          आपकी व्यक्तिगत जानकारी इसमें शामिल है। हम आपकी व्यक्तिगत जानकारी की
          सुरक्षा के लिए विभिन्न सुरक्षा उपाय लागू करते हैं।
        </p>

      </div>
    </div>
  );
}