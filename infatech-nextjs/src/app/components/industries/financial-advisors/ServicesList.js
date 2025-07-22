const services = [
  {
    icon: "🎯",
    title: "Goal-Based Financial Planning",
    description:
      "Plan step-by-step for life&rsquo;s big milestones — from your child&rsquo;s education and wedding to your own comfortable retirement. I&rsquoll help you define clear goals and build a plan to reach them stress-free.",
  },
  {
    icon: "📈",
    title: "Mutual Fund Investments",
    description:
      "Grow your wealth with carefully selected mutual funds. Whether you prefer SIPs or lump sum investments, I recommend the right mix based on your risk appetite and goals.",
  },
  {
    icon: "💰",
    title: "Tax Planning & Saving",
    description:
      "Don&rsquo;t let taxes eat into your income. I help you choose tax-saving investments and smart ways to reduce your tax burden legally and efficiently.",
  },
  {
    icon: "🔄",
    title: "Portfolio Review & Rebalancing",
    description:
      "Markets change — and so should your investment plan. I provide periodic reviews to check if you’re on track, and rebalance your portfolio if needed to match your goals.",
  },
  {
    icon: "🏝️",
    title: "Retirement Planning",
    description:
      "Ensure a worry-free retirement with a steady income stream. I&rsquoll help you calculate how much you need, plan your contributions, and select suitable funds to build a robust retirement corpus.",
  },
  {
    icon: "🛡️",
    title: "Insurance Planning",
    description:
      "Protect your family and assets with the right insurance — life cover, health cover, and critical illness plans that fit your situation and budget.",
  },
  {
    icon: "👶",
    title: "Children&rsquo;s Future Planning",
    description:
      "Give your child the best possible start in life with dedicated investment plans for education and marriage expenses.",
  },
  {
    icon: "🚨",
    title: "Emergency Fund Setup",
    description:
      "I&rsquoll guide you to build an emergency fund so unexpected expenses never derail your goals.",
  },
];

const ServicesSection = () => (
  <section id="services" className="position-relative py-5 bg-white overflow-hidden">
    <div className="container text-center position-relative z-1">
      <h2 className="h1 fw-bold text-dark mb-3 text-uppercase">
        Our <span className="text-warning">Services</span>
      </h2>
      <p className="text-muted mx-auto mb-5" style={{ maxWidth: "650px" }}>
        Every individual and family is different — your goals, your income, and your dreams.
        That’s why my approach is personal and flexible. Here’s how I can support you on your financial journey:
      </p>

      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <div className="bg-light rounded border p-4 shadow-sm hover-shadow transition-all h-100">
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-warning" style={{ width: "64px", height: "64px", fontSize: "1.75rem" }}>
                {service.icon}
              </div>
              <h3 className="h6 fw-bold text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-muted small">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <button className="btn btn-warning text-dark px-4 py-3 rounded-pill">
          Not sure which plan fits you best? Let’s talk and create a personalised roadmap for your goals
        </button>
      </div>
    </div>
  </section>
);


export default ServicesSection;
