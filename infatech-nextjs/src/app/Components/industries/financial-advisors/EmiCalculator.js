// components/EmiCalculator.js
"use client";
import React, { useState } from "react";

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-10">
      <h2 className="text-xl font-semibold text-yellow-600 mb-4">EMI Calculator</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Loan Amount (₹)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={50000}
              max={5000000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-24 border rounded px-2 py-1"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={20}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-24 border rounded px-2 py-1"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700">
            Loan Tenure (Years)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={30}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-24 border rounded px-2 py-1"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-stretch">
  <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 h-full flex flex-col justify-center">
    <p className="text-sm text-gray-500">Monthly EMI</p>
    <p className="text-xl font-bold text-gray-800 mt-1">
      ₹{Math.round(emi).toLocaleString()}
    </p>
  </div>
  <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 h-full flex flex-col justify-center">
    <p className="text-sm text-gray-500">Total Interest</p>
    <p className="text-xl font-bold text-gray-800 mt-1">
      ₹{Math.round(totalInterest).toLocaleString()}
    </p>
  </div>
  <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 h-full flex flex-col justify-center">
    <p className="text-sm text-gray-500">Total Payment</p>
    <p className="text-xl font-bold text-yellow-600 mt-1">
      ₹{Math.round(totalPayment).toLocaleString()}
    </p>
  </div>
</div>

      </div>
    </div>
  );
}
