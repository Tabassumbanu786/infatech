import React from 'react';
import { Download, Target, PieChart, TrendingUp,Calculator } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <Target className="text-warning" style={{ width: 32, height: 32 }} />,
      title: "📘 Goal Planner (PDF)",
      subtitle: "My Financial Goal Planner",
      description: "Help clients define, prioritize, and timeline their short-term and long-term financial goals.",
      sections: [
        "Personal Details (Name, Age, Contact, Date)",
        "Top 3 Financial Goals (Description, Target Amount, Target Date, Priority)",
        "Why This Goal Matters to Me (Short reflection box for emotional connection)",
        "How I Plan to Fund It (Monthly Savings Needed, Existing Savings Allocated, Investment Method)",
        "Progress Tracker (Month, Saved This Month, Cumulative Saved, Notes)"
      ]
    },
    {
      icon: <PieChart className="text-primary" style={{ width: 32, height: 32 }} />,
      title: "📊 Expense Tracker (Excel)",
      subtitle: "Complete Expense Management",
      description: "Comprehensive expense tracking with category-wise breakdown and spending insights.",
      sections: [
        "Monthly Expenses (Date, Category, Description, Amount, Mode of Payment)",
        "Category Summary (Auto-populated totals and percentages)",
        "Spending Insights (Pie Chart: Category-wise breakdown, Monthly average, Highest-spending category)",
        "Dropdown Categories: Food, Rent, Utilities, Subscriptions, Travel, Education, Shopping, Medical, Others"
      ]
    },
    {
      icon: <TrendingUp className="text-warning" style={{ width: 32, height: 32 }} />,
      title: "📈 Simple SIP Planner (Excel)",
      subtitle: "SIP Growth Estimator",
      description: "SIP growth estimator with detailed calculations and year-wise breakdown.",
      sections: [
        "Input Fields (Monthly SIP Amount, Expected Annual Return %, Duration in Years)",
        "Output Calculations (Total Invested, Estimated Returns, Total Value at Maturity)",
        "Formula Used: Future Value = SIP × [{(1 + r)^n – 1} / r] × (1 + r)",
        "Year-wise breakdown (Total Invested and Value at End of Year for each year)"
      ]
    }
  ];
  const tools = [
    {
      icon: Target,
      name: "Goal Planner PDF",
      description: "Comprehensive worksheet to plan and track your financial goals",
      type: "PDF",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Calculator,
      name: "SIP Calculator Excel",
      description: "Calculate your SIP returns and plan your investments",
      type: "Excel",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: PieChart,
      name: "Expense Tracker",
      description: "Track and categorize your monthly expenses",
      type: "Excel",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="resources" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h1 fw-bold text-dark mb-3">Downloadable Resources</h2>
          <p className="lead text-dark">Professional templates your clients can use immediately</p>
        </div>

        <div className="row g-4">
          <section className="py-2 bg-light">
  <div className="container px-3">
    <div className="row g-4 justify-content-center" style={{ maxWidth: '960px', margin: '0 auto' }}>
      {tools.map((tool, index) => {
        const IconComponent = tool.icon;
        return (
          <div key={index} className="col-12 col-md-4">
            <div className="bg-white p-4 rounded shadow-sm h-100 hover-shadow transition">
              <div
                className={`d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle ${tool.color}`}
                style={{ width: '64px', height: '64px' }}
              >
                <IconComponent style={{ width: '32px', height: '32px' }} />
              </div>
              <h3 className="h5 fw-semibold text-dark text-center mb-3">{tool.name}</h3>
              <p className="text-muted text-center mb-4">{tool.description}</p>
              <div className="text-center">
                <button className="btn btn-warning text-white d-inline-flex align-items-center gap-2">
                  <Download size={16} />
                  <span>Download {tool.type}</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        </div>

        {/* Live Market Features */}
        <div className="mt-5 bg-white rounded shadow-sm p-4">
          <h3 className="h3 fw-bold text-dark text-center mb-4">Live Market Features</h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-primary bg-opacity-10 rounded p-4 h-100">
                <h4 className="fs-6 fw-semibold text-primary mb-3">Live NSE/BSE Ticker</h4>
                <div className="mb-2 d-flex justify-content-between">
                  <span className="text-primary">NIFTY 50:</span>
                  <span className="fw-semibold text-primary">21,456.75 ↑ 1.2%</span>
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  <span className="text-primary">SENSEX:</span>
                  <span className="fw-semibold text-primary">70,842.34 ↑ 0.8%</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-primary">BANK NIFTY:</span>
                  <span className="fw-semibold text-primary">46,789.20 ↑ 2.1%</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-warning bg-opacity-10 rounded p-4 h-100">
                <h4 className="fs-6 fw-semibold text-warning mb-3">Latest Finance News (Auto-updated)</h4>
                <div className="mb-3 text-dark small">
                  <div className="fw-semibold">RBI Announces New Guidelines</div>
                  <div className="text-warning">2 hours ago</div>
                </div>
                <div className="mb-3 text-dark small">
                  <div className="fw-semibold">Market Reaches All-Time High</div>
                  <div className="text-warning">4 hours ago</div>
                </div>
                <div className="text-dark small">
                  <div className="fw-semibold">New Mutual Fund Launches</div>
                  <div className="text-warning">6 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
