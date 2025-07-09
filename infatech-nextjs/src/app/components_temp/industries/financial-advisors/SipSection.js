// components/SipCalculator.js
"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SipSection() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  const futureValue =
    monthly *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const investedAmount = monthly * months;
  const gain = futureValue - investedAmount;

  const data = Array.from({ length: months }, (_, i) => {
    const fv =
      monthly *
      ((Math.pow(1 + monthlyRate, i + 1) - 1) / monthlyRate) *
      (1 + monthlyRate);
    return { month: i + 1, value: Math.round(fv) };
  });

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-10">
      <h2 className="text-xl font-semibold text-yellow-600 mb-4">SIP Calculator</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Monthly Investment (₹)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1000}
              max={100000}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-24 border rounded px-2 py-1"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700">
            Investment Period (Years)
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

          <label className="block text-sm font-medium text-gray-700">
            Expected Annual Return (%)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={30}
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
        </div>

        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={data}>
              <XAxis dataKey="month" hide />
              <YAxis hide />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#facc15"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
        <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
          <p className="text-sm text-gray-500">Invested Amount</p>
          <p className="text-lg font-bold text-gray-800">
            ₹{investedAmount.toLocaleString()}
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
          <p className="text-sm text-gray-500">Estimated Returns</p>
          <p className="text-lg font-bold text-gray-800">
            ₹{Math.round(gain).toLocaleString()}
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
          <p className="text-sm text-gray-500">Total Value</p>
          <p className="text-lg font-bold text-yellow-600">
            ₹{Math.round(futureValue).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
