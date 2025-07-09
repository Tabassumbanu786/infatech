import React from "react";
import FinanceNews from "./FinanceNews"; // adjust path if needed


import EmiCalculator from './EmiCalculator';
import SipSection from "./SipSection";
 // ✅ same folder




export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Useful Tools & Insights for Smart Investing
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Stay informed and take charge of your finances with these handpicked resources.
        </p>

        {/* Live Ticker */}
        <div className="mb-12">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
    📈 Live Stock Market Updates
  </h3>
  <div className="border rounded-md shadow overflow-hidden">
    <iframe
      src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BSE%3ASENSEX%22%2C%22title%22%3A%22SENSEX%22%7D%2C%7B%22proName%22%3A%22NSE%3ANIFTY%22%2C%22title%22%3A%22NIFTY%2050%22%7D%2C%7B%22proName%22%3A%22BSE%3ABANK%22%2C%22title%22%3A%22BANK%20Index%22%7D%5D%2C%22theme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22light%22%7D"
      width="100%"
      height="60"
      frameBorder="0"
      allowTransparency="true"
      scrolling="no"
    ></iframe>
  </div>
</div>


        {/* Latest Finance News */}
        <div className="mb-12">
  <FinanceNews />
</div>


        {/* Calculators */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Financial Calculators</h3>
          <p className="text-gray-600 mb-4">
            Plan your SIPs, calculate EMIs — use our quick tools anytime.
          </p>
          <div className="mt-10 space-y-12">
          <SipSection/>
           <EmiCalculator/>
          </div>

        </div>

        {/* Downloadables */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Download Free Tools</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><a href="/assets/tools/goal-planner.pdf" target="_blank" className="text-blue-600 hover:underline">Goal Planner PDF</a></li>
            <li><a href="/assets/tools/expense-tracker.xlsx" target="_blank" className="text-blue-600 hover:underline">Expense Tracker Excel</a></li>
            <li><a href="/assets/tools/sip-planner.xlsx" target="_blank" className="text-blue-600 hover:underline">Simple SIP Planner Sheet</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscribe to Monthly Tips</h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
