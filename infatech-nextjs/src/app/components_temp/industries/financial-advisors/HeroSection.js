import Image from "next/image";
import './HeroSection.css';


const HeroSection = () => (
  <section className="bg-[#050a1e] text-white py-16 px-4 md:px-12">
    <div className="bg-red-500 text-white p-2">Test</div>
    <div className="test-box">
      Tailwind test fallback
    </div> 
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
  <h3 className="text-xl font-bold text-gray-800">Financial Planning</h3>
  <p className="text-gray-600 mt-2">Helping you grow your wealth smartly.</p>
  <button className="mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300">
    Book Now
  </button>
</div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
         Ravi Shah,<br />
          <span className="text-yellow-400">Your Trusted Financial Advisor</span>
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
        </p>
        <p className="text-md text-gray-400 mb-6">
          Hi, I’m Ravi Shah , an AMFI-registered Mutual Fund Distributor with 12 years of experience in guiding families and professionals toward their financial goals.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
          Book a Free Consultations
        </button>
      </div>

      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <Image
            src="/assets/financial-advisors/hero.png"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
