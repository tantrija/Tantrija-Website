export const steps = [
  {
    id: "greeting",
    message: "Welcome to Tantrija Enterprises! How can we assist you today?",
    trigger: "list_services",
  },
  {
    id: "list_services",
    message: "Here are the services we offer:",
    trigger: "select_service",
  },
  {
    id: "select_service",
    options: [
      { value: "branding", label: "Branding", trigger: "subservices_branding" },
      { value: "logo", label: "Logo Design", trigger: "subservices_logo" },
      { value: "web", label: "Web Development", trigger: "subservices_web" },
      { value: "mobile", label: "Mobile App Development", trigger: "subservices_mobile" },
      { value: "blockchain", label: "Blockchain Solutions", trigger: "subservices_blockchain" },
      { value: "chrome", label: "Chrome Extensions", trigger: "subservices_chrome" },
      { value: "sdk", label: "SDK Development", trigger: "subservices_sdk" },
    ],
  },
  {
    id: "subservices_branding",
    message: "Select a Branding subservice:",
    trigger: "select_subservice_branding",
  },
  {
    id: "select_subservice_branding",
    options: [
      { value: "logo", label: "Logo Design", trigger: "contact_form" },
      { value: "guidelines", label: "Brand Guidelines", trigger: "contact_form" },
      { value: "marketing", label: "Marketing Collateral", trigger: "contact_form" },
      { value: "stationery", label: "Stationery Design", trigger: "contact_form" },
      { value: "packaging", label: "Packaging Design", trigger: "contact_form" },
      { value: "brand_audit", label: "Brand Audit", trigger: "contact_form" },
      { value: "visual_identity", label: "Visual Identity", trigger: "contact_form" },
      { value: "naming", label: "Brand Naming", trigger: "contact_form" },
      { value: "positioning", label: "Brand Positioning", trigger: "contact_form" },
      { value: "strategy", label: "Brand Strategy", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "subservices_logo",
    message: "Select a Logo Design subservice:",
    trigger: "select_subservice_logo",
  },
  {
    id: "select_subservice_logo",
    options: [
      { value: "custom", label: "Custom Logo Design", trigger: "contact_form" },
      { value: "iconography", label: "Iconography", trigger: "contact_form" },
      { value: "rebranding", label: "Rebranding", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "subservices_web",
    message: "Select a Web Development subservice:",
    trigger: "select_subservice_web",
  },
  {
    id: "select_subservice_web",
    options: [
      { value: "corporate", label: "Corporate Websites", trigger: "contact_form" },
      { value: "ecommerce", label: "E-commerce Platforms", trigger: "contact_form" },
      { value: "web_apps", label: "Web Applications", trigger: "contact_form" },
      { value: "cms", label: "CMS Integration", trigger: "contact_form" },
      { value: "seo", label: "SEO Optimization", trigger: "contact_form" },
      { value: "responsive", label: "Responsive Design", trigger: "contact_form" },
      { value: "landing_pages", label: "Landing Pages", trigger: "contact_form" },
      { value: "performance", label: "Performance Optimization", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "subservices_mobile",
    message: "Select a Mobile App Development subservice:",
    trigger: "select_subservice_mobile",
  },
  {
    id: "select_subservice_mobile",
    options: [
      { value: "ios", label: "iOS Apps", trigger: "contact_form" },
      { value: "android", label: "Android Apps", trigger: "contact_form" },
      { value: "cross_platform", label: "Cross-Platform Apps", trigger: "contact_form" },
      { value: "pwa", label: "Progressive Web Apps", trigger: "contact_form" },
      { value: "game_dev", label: "Mobile Game Development", trigger: "contact_form" },
      { value: "iot", label: "IoT Apps", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "subservices_blockchain",
    message: "Select a Blockchain Solutions subservice:",
    trigger: "select_subservice_blockchain",
  },
  {
    id: "select_subservice_blockchain",
    options: [
      { value: "dapps", label: "dApp Development", trigger: "contact_form" },
      { value: "tokens", label: "Token Creation", trigger: "contact_form" },
      { value: "smart_contracts", label: "Smart Contracts", trigger: "contact_form" },
      { value: "nft", label: "NFT Platforms", trigger: "contact_form" },
      { value: "dex", label: "Decentralized Exchanges", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "subservices_chrome",
    message: "Select a Chrome Extension subservice:",
    trigger: "select_subservice_chrome",
  },
  {
    id: "select_subservice_chrome",
    options: [
      { value: "custom_extensions", label: "Custom Extensions", trigger: "contact_form" },
      { value: "tools", label: "Productivity Tools", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "subservices_sdk",
    message: "Select an SDK Development subservice:",
    trigger: "select_subservice_sdk",
  },
  {
    id: "select_subservice_sdk",
    options: [
      { value: "custom_sdk", label: "Custom SDK Development", trigger: "contact_form" },
      { value: "api_integration", label: "API Integration", trigger: "contact_form" },
      { value: "back", label: "Go Back", trigger: "select_service" },
    ],
  },
  {
    id: "contact_form",
    message: "Please provide your details so we can assist you better.",
    trigger: "ask_name",
  },
  {
    id: "ask_name",
    message: "What is your name?",
    user: true,
    trigger: "ask_email",
  },
  {
    id: "ask_email",
    message: "What is your email address?",
    user: true,
    trigger: "ask_number",
  },
  {
    id: "ask_number",
    message: "What is your phone number?",
    user: true,
    trigger: "thanks_message",
  },

  {
    id: "ask_name",
    message: "What is your name?",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    trigger: "ask_email",
    validator: (value) => {
      if (!value.trim()) {
        return "Name cannot be empty!";
      }
      return true;
    },
  },
  {
    id: "ask_email",
    message: "What is your email address?",
    trigger: "email",
  },
  {
    id: "email",
    user: true,
    trigger: "ask_number",
    validator: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please provide a valid email address!";
      }
      return true;
    },
  },
  {
    id: "ask_number",
    message: "What is your phone number?",
    trigger: "number",
  },
  {
    id: "number",
    user: true,
    trigger: "thanks_message",
    validator: (value) => {
      const phoneRegex = /^[0-9]{10}$/; // Adjust for country-specific formats
      if (!phoneRegex.test(value)) {
        return "Please provide a valid 10-digit phone number!";
      }
      return true;
    },
  },
  {
    id: "thanks_message",
    message: "Thank you for sharing your details! We’ll get in touch with you shortly.",
    trigger: "company_details",
  },
  {
    id: "company_details",
    component: (
      <div style={{ textAlign: "center", backgroundColor: "#f4f7f6", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontFamily: "Arial, sans-serif", color: "#333" }}>
        <h3 style={{ color: "#007bff", fontSize: "24px", marginBottom: "15px" }}>Thank You for Reaching Out!</h3>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>Here are our contact details:</p>
        <div style={{ marginBottom: "15px" }}>
          <p style={{ fontSize: "16px", marginBottom: "8px" }}>
            📧 <strong>Email:</strong>
            <a href="mailto:admin@tantrija.com" style={{ color: "#007bff", textDecoration: "none" }}> admin@tantrija.com</a>
          </p>
          <p style={{ fontSize: "16px", marginBottom: "8px" }}>
            📞 <strong>Phone:</strong>
            <a href="tel:+917420969224" style={{ color: "#007bff", textDecoration: "none" }}> +91-7420969224</a>
          </p>
          <p style={{ fontSize: "16px", marginBottom: "8px" }}>
            💬 <strong>WhatsApp:</strong>
            <a href="https://wa.me/917420969224" target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", textDecoration: "none", fontWeight: "bold" }}> Chat with Us</a>
          </p>
        </div>
        <div>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "20px" }}>
            🌐 <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/company/tantrija" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}> Visit Our Page</a>
          </p>
        </div>
        <button
          style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
          onClick={() => window.location.reload()}>
          Restart
        </button>
      </div>
    ),
    end: true,
  }
];
