export const metadata = {
  title: "About Us - SarkariResult6.com",
  description:
    "About SarkariResult6.com - Trusted platform for latest government jobs, results, admit cards and notifications across India.",
  alternates: {
    canonical: "https://sarkariresult6.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className="site-container py-12 px-4">

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          About <span className="text-[#6b0035]">SarkariResult6.com</span>
        </h1>

        <p className="mt-4 text-gray-700 max-w-3xl mx-auto leading-7">
          <span className="font-bold">SarkariResult6.com</span> is a trusted
          and dedicated online platform providing latest and important
          information like government jobs, notifications, sarkari results,
          admit cards, answer keys, exam dates, syllabus and online
          application forms across India.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-gray-100 border-l-4 border-[#6b0035] p-8 shadow-md text-[16px] leading-8 text-gray-800">

        <p>
          Every year, millions of candidates prepare for government exams.
          <span className="font-bold"> SarkariResult6.com </span>
          provides timely and well-organized information from official
          websites on a single platform. The format of our website is simple,
          user-friendly and all information is provided in one place.
        </p>

        {/* What We Offer */}
        <h2 className="text-xl font-bold mt-8 mb-4 text-[#6b0035]">
          What We Offer
        </h2>

        <ul className="grid md:grid-cols-2 gap-2 list-disc ml-6">
          <li>Latest Government Jobs Notification</li>
          <li>Online Application Form</li>
          <li>Important Dates</li>
          <li>Admit Card Download</li>
          <li>Sarkari Results</li>
          <li>Merit List</li>
          <li>Answer Key & Cut Off Marks</li>
          <li>Exam Syllabus & Exam Patterns</li>
          <li>Central & State Government Recruitments</li>
        </ul>

        {/* Our Mission */}
        <h2 className="text-xl font-bold mt-10 mb-4 text-[#6b0035]">
          Our Mission
        </h2>

        <p>
          We cover all recruitment boards and organizations such as UPSC,
          SSC, Railway, Banking, Defence, Police, Teaching Jobs, State PSCs
          and various Government Departments.
        </p>

        <p className="mt-4">
          Our mission is to provide accurate job information across India
          with timely, authentic and complete updates related to government
          exams and recruitments. We hope that no candidate loses any
          opportunity due to lack of awareness or delayed updates.
        </p>

        <p className="mt-4">
          <span className="font-semibold">SarkariResult6.com</span> is
          constantly striving to bridge the information gap between official
          notifications and candidates.
        </p>

        {/* Accuracy */}
        <h2 className="text-xl font-bold mt-10 mb-4 text-[#6b0035]">
          Our Commitment To Accuracy
        </h2>

        <p>
          <span className="font-semibold">SarkariResult6.com</span>
          publishes trustworthy information sourced from official
          government websites, employment news and authorized
          notifications. Our team carefully verifies every update before
          publishing it, ensuring users receive genuine and reliable
          content.
        </p>

        {/* Why Choose */}
        <h2 className="text-xl font-bold mt-10 mb-4 text-[#6b0035]">
          Why Choose SarkariResult6.com?
        </h2>

        <ul className="grid md:grid-cols-2 gap-2 list-disc ml-6">
          <li>Fast And Verified Updates</li>
          <li>Mobile-Friendly</li>
          <li>User-Focused Design</li>
          <li>Regularly Updated Information</li>
          <li>All Information Free Access</li>
        </ul>

        <p className="mt-6">
          We are constantly improving the platform to bring a better
          browsing experience and useful features to our users.
        </p>

      </div>
    </div>
  );
}