export const metadata = {
  title: "Contact Us - SarkariResult6.com",
  description:
    "Contact SarkariResult6.com for general inquiries, suggestions and feedback.",
  alternates: {
    canonical: "https://sarkariresult6.com/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <div className="site-container py-12 px-4">

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Us
      </h1>

      <div className="bg-gray-100 border-l-4 border-[#6b0035] p-8 text-[16px] leading-8 text-gray-800 shadow-md">

        {/* Contact Information Section */}
        <h2 className="text-xl font-bold mb-3">
          Contact Information
        </h2>

        <p>
          <span className="font-bold">SarkariResult6.com</span> is a digital
          platform. Our team collects and verifies all information from official
          websites, then improves its usability with the help of professional
          content writers.
        </p>

        <p className="mt-4">
          Our focus is on providing a superior mobile view and a better user
          experience for students and job seekers across India.
        </p>

        {/* Content Transparency Section */}
        <h2 className="text-xl font-bold mt-8 mb-3">
          Content Transparency
        </h2>

        <p>
          <span className="font-bold">SarkariResult6.com</span> team writes
          articles based on deep research using information from reliable sources
          such as well-known news publications, official websites, press
          releases, and official documents.
        </p>

        <p className="mt-4">
          We aim to provide accurate and updated information while maintaining
          transparency and clarity in our content.
        </p>

        {/* Contact Email Section */}
        <h2 className="text-xl font-bold mt-8 mb-3">
          For More General Inquiries & Feedback
        </h2>

        <p>
          If you have any questions, suggestions, or feedback, please feel free
          to contact us at:
        </p>

        <p className="mt-4 text-lg font-semibold">
          Email ID:{" "}
          <span className="text-[#6b0035] font-bold">
            Support@sarkariresult6.com
          </span>
        </p>

      </div>
    </div>
  );
}