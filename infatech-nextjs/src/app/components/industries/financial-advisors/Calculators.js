import React, { useState } from 'react';
import { Calculator, TrendingUp, Home } from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('sip');
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanRate, setLoanRate] = useState(8.5);
  const [loanYears, setLoanYears] = useState(20);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 100 / 12;
    const months = sipYears * 12;
    const futureValue = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvested = sipAmount * months;
    const returns = futureValue - totalInvested;
    return { futureValue, totalInvested, returns };
  };

  const calculateEMI = () => {
    const monthlyRate = loanRate / 100 / 12;
    const months = loanYears * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;
    return { emi, totalAmount, totalInterest };
  };

  const sipResult = calculateSIP();
  const emiResult = calculateEMI();

  return (
    <section id="calculators" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h1 fw-bold text-dark mb-3">Financial Calculators</h2>
          <p className="lead text-dark">Professional tools for your clients</p>
        </div>

        <div className="mx-auto" style={{ maxWidth: '960px' }}>
          {/* Tabs */}
          <div className="d-flex justify-content-center mb-4">
            <div className="bg-light rounded p-1 d-flex">
              <button
                onClick={() => setActiveTab('sip')}
                className={`btn d-flex align-items-center px-4 py-2 fw-semibold me-2 ${
                  activeTab === 'sip' ? 'btn-warning text-white shadow' : 'btn-outline-dark'
                }`}
              >
                <TrendingUp className="me-2" size={18} />
                SIP Calculator
              </button>
              <button
                onClick={() => setActiveTab('emi')}
                className={`btn d-flex align-items-center px-4 py-2 fw-semibold ${
                  activeTab === 'emi' ? 'btn-warning text-white shadow' : 'btn-outline-dark'
                }`}
              >
                <Home className="me-2" size={18} />
                EMI Calculator
              </button>
            </div>
          </div>

          {/* SIP Calculator */}
          {activeTab === 'sip' && (
            <div className="bg-light rounded p-4">
              <h3 className="h3 fw-bold text-dark text-center mb-4">SIP Calculator</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-medium">Monthly SIP Amount</label>
                    <input
                      type="number"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Number(e.target.value))}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Expected Annual Return (%)</label>
                    <input
                      type="number"
                      value={sipRate}
                      onChange={(e) => setSipRate(Number(e.target.value))}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Investment Period (Years)</label>
                    <input
                      type="number"
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-white rounded p-4 shadow-sm h-100">
                    <h4 className="h5 fw-bold text-dark mb-3">Investment Summary</h4>
                    <div className="mb-2 d-flex justify-content-between">
                      <span>Total Invested:</span>
                      <span className="fw-semibold">₹{sipResult.totalInvested.toLocaleString()}</span>
                    </div>
                    <div className="mb-2 d-flex justify-content-between">
                      <span>Estimated Returns:</span>
                      <span className="fw-semibold text-primary">₹{sipResult.returns.toLocaleString()}</span>
                    </div>
                    <div className="border-top pt-3 d-flex justify-content-between fw-bold fs-6">
                      <span>Total Value:</span>
                      <span className="text-warning">₹{sipResult.futureValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EMI Calculator */}
          {activeTab === 'emi' && (
            <div className="bg-light rounded p-4">
              <h3 className="h3 fw-bold text-dark text-center mb-4">EMI Calculator</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-medium">Loan Amount</label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Interest Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={loanRate}
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Loan Tenure (Years)</label>
                    <input
                      type="number"
                      value={loanYears}
                      onChange={(e) => setLoanYears(Number(e.target.value))}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-white rounded p-4 shadow-sm h-100">
                    <h4 className="h5 fw-bold text-dark mb-3">Loan Summary</h4>
                    <div className="mb-2 d-flex justify-content-between">
                      <span>Monthly EMI:</span>
                      <span className="fw-semibold text-warning">₹{emiResult.emi.toLocaleString()}</span>
                    </div>
                    <div className="mb-2 d-flex justify-content-between">
                      <span>Total Interest:</span>
                      <span className="fw-semibold text-danger">₹{emiResult.totalInterest.toLocaleString()}</span>
                    </div>
                    <div className="border-top pt-3 d-flex justify-content-between fw-bold fs-6">
                      <span>Total Amount:</span>
                      <span>₹{emiResult.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculators;
