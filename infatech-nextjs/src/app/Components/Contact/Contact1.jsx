"use client";
import Image from "next/image";

export default function Contact1() {
  return (
    <div className="bg-white py-16 px-4 flex flex-col items-center">
      {/* <h4 className="text-lg font-semibold text-[#0A0A23] mb-2">Contact Us</h4> */}
      <h1 className="text-4xl font-bold text-center text-[#0A0A23] mb-10">
        Let’s Connect With <span className="text-[#FF3B00]">Our Team</span>
      </h1>

      {/* CARD START */}
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full px-8 py-10 flex flex-col items-center text-center space-y-4">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <Image
            src="/assets/images/inner/tabassum-circular.png"
            alt="Tabassum Sheliya"
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#0A0A23]">Tabassum Sheliya</h2>
        <p className="text-sm text-[#FF3B00] font-medium">Product Consultant</p>

        <div className="text-[#0A0A23] text-sm space-y-1 mt-2">
          <p>📧 tabassumbanumusa@gmail.com</p>
          <p>📞 +91 7021710954</p>
        </div>

        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF3B00] mt-3 inline-flex items-center gap-1 text-sm underline"
        >
          🔗 Connect on LinkedIn
        </a>
      </div>
      {/* CARD END */}
    </div>
  );
}
