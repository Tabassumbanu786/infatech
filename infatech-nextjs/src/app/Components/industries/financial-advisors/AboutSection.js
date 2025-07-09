import Image from "next/image";

const AboutSection = () => (
  <section id="about" className="bg-white">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase">
          About <span className="text-yellow-500">Us</span>
        </h2>
        <p className="text-md text-gray-700 mb-6">
          Hi, I&rsquo;m <strong>Ravi Shah</strong>, an AMFI-registered Mutual Fund Distributor with <strong>10+ years</strong> of experience. I&rsquo;m passionate about helping families and professionals make smart investment decisions and build a secure future.
        </p>
        <p className="text-md text-gray-700 mb-6">
          My approach is personalized &mdash; I listen to your goals and create tailored strategies using mutual funds, tax-saving instruments, and long-term planning tools.
        </p>
        <p className="text-md text-gray-700">
          Whether you&rsquo;re planning for retirement, your child&rsquo;s education, or setting up an emergency fund, I&rsquo;ll be your trusted guide. When I&rsquo;m not working with clients, I enjoy cricket and reading about financial strategies.
        </p>
      </div>
      <div className="relative">
        <Image
          src="/assets/financial-advisors/about-illustration.png"
          alt="About Illustration"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
