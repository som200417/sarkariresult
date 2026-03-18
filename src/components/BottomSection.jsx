import Link from "next/link";
import { shortDisclaimer } from "@/utils/disclaimerText";
import { MessageCircle, Send } from "lucide-react";

export default function BottomSection() {
  return (
    <div className="my-10 text-sm">

      {/* 🔥 Social Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 ">

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029VbCO5lUICVfkxi473f3g"
          target="_blank"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-base shadow-lg transition"
        >
          <MessageCircle size={20} />
          JOIN WHATSAPP
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/SarkariResult6Official"
          target="_blank"
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold text-base shadow-lg transition"
        >
          <Send size={20} />
          JOIN TELEGRAM
        </a>

      </div>

      {/* 🔥 Disclaimer Card */}
      <div className="bg-gray-100 border-l-4 border-[#6b0035] p-5 rounded shadow-sm">

        <p className="text-gray-900 leading-6 text-justify font-medium">
          <strong className="text-[#6b0035] text-base">
            Disclaimer:
          </strong>{" "}
          {shortDisclaimer}{" "}
          <Link
            href="/disclaimer"
            className="text-blue-700 font-bold underline hover:text-blue-900"
          >
            Read Full Disclaimer
          </Link>
        </p>

      </div>

      {/* 🔥 CTA Button */}
      <div className="mt-6 flex justify-center">
        <a
          href="/"
          className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg transition"
        >
          📅 RECRUITMENT CALENDAR
        </a>
      </div>

    </div>
  );
}