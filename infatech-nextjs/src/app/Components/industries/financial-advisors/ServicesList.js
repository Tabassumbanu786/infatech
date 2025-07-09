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
  <section id="services" className="relative py-10 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase">
        Our <span className="text-yellow-500">Services</span>
      </h2>
      <p className="text-md text-gray-500 max-w-2xl mx-auto mb-12">
  Every individual and family is different — your goals, your income, and your dreams. That&rsquo;s why my approach is personal and flexible. Here&rsquo;s how I can support you on your financial journey:
</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-400 rounded-full mb-4 text-3xl">
              {service.icon}
            </div>
            <h3 className="text-md font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl text-base hover:bg-yellow-600 transition">
          Not sure which plan fits you best? Let&rsquo;s talk and create a personalised roadmap for your goals
        </button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
