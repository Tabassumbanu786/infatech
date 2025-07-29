const landingpage = {
  hero: {
    title: "Your Own Professional Bakery Website",
    subtitle: "Your customers are online — your bakery should be too.",
    badges: [
      { text: "7-Day Delivery", color: "success", icon: "bi bi-check-circle-fill" },
      { text: "Zero Hassle Setup", color: "warning", icon: "bi bi-shield-fill-check" },
      { text: "Deliciously Designed", color: "danger", icon: "bi bi-award-fill" },
    ],
    buttonText: "SEE A LIVE DEMO",
    highlightColor: "#dc2626", // reddish bakery feel
    logo: "/assets/images/logo_bakery.png" // replace with your bakery logo if needed
  },

  whyItMatters: {
    title: "Why This Matters",
    intro: [
      "When someone hears about your bakery or smells your fresh bread — the first thing they do? Google you.",
      "If they can't find a warm, inviting website that shows your products and story — they might order from someone else."
    ],
    subheading: "Our Bakery Website Starter Pack helps you:",
    points: [
      { text: "Build trust with beautiful visuals", color: "success" },
      { text: "Accept orders or inquiries online", color: "warning" },
      { text: "Show off your menu, offers & photos", color: "danger" },
      { text: "Save time with built-in chatbot for common queries", color: "info" }
    ]
  },

  features: {
    heading: "Everything You Need",
    items: [
      "Online order form or WhatsApp ordering",
      "Mobile-optimized product gallery",
      "Special offers and seasonal menus",
      "Contactless delivery & pickup info",
      "Photo showcase for cakes, bread, and pastries",
      "Festive banners and daily deals"
    ]
  },

  templates: [
    {
      id: 1,
      name: "Artisan Bakes",
      description: "A rustic and elegant design to showcase handcrafted pastries and sourdoughs.",
      image: "https://images.pexels.com/photos/1799101/pexels-photo-1799101.jpeg",
      features: [
        "Rustic fonts and natural colors",
        "Instagram-ready photo gallery",
        "Baker’s story section",
        "Pre-order option"
      ],
      style: "Rustic"
    },
    {
      id: 2,
      name: "Sweet Treats",
      description: "Bright and playful layout for cupcake shops and sweet bakeries.",
      image: "https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg",
      features: [
        "Colorful banners",
        "Birthday cakes & custom order form",
        "Offer carousel",
        "Live chat bubble"
      ],
      style: "Playful"
    },
    {
      id: 3,
      name: "Daily Bread",
      description: "Minimalist and modern, focused on fresh bread delivery and local pickup.",
      image: "https://images.pexels.com/photos/1040984/pexels-photo-1040984.jpeg",
      features: [
        "Clean layout",
        "Bread of the Day highlight",
        "WhatsApp + phone ordering",
        "Service area map"
      ],
      style: "Minimal"
    },
    {
      id: 4,
      name: "Classic Confections",
      description: "Elegant and timeless template for traditional bakeries and cafés.",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      features: [
        "Vintage design",
        "Full menu section",
        "Cafe location & hours",
        "Newsletter subscription"
      ],
      style: "Classic"
    },
    {
      id: 5,
      name: "Bakehouse Pro",
      description: "Smart and scalable layout for bakeries offering custom cakes and catering.",
      image: "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg",
      features: [
        "Custom cake quote form",
        "Catering & event options",
        "Photo testimonials",
        "Advanced menu filtering"
      ],
      style: "Pro"
    },
    {
      id: 6,
      name: "Neighborhood Bites",
      description: "Friendly and local-first design that makes small bakeries shine online.",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      features: [
        "Owner’s welcome message",
        "Festive offers & loyalty discounts",
        "Neighborhood delivery info",
        "Festive photos and greetings"
      ],
      style: "Community"
    }
  ]
};

export default landingpage;
