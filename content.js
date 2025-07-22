
document.addEventListener("DOMContentLoaded", () => {
  const content = {
    hero: {
      title: "Powering Your Electronic Supply Chain",
      text: "From sensors to integrated circuits, LogicLoop delivers scalable, reliable B2B sourcing."
    },
    products: [
      { title: "PCBs", description: "High-quality printed circuit boards for industrial needs." },
      { title: "Sensors", description: "Wide range of temperature, pressure, and IoT sensors." },
      { title: "ICs", description: "Microcontrollers, analog, and digital IC solutions." },
      { title: "Power Modules", description: "DC-DC converters, voltage regulators, and more." }
    ],
    services: [
      "Custom Procurement & Vendor Consolidation",
      "Bulk Inventory Planning",
      "Technical Sourcing Assistance",
      "Startup & SME Partnership Plans"
    ],
    about: "We are a B2B-first electronics distributor helping businesses scale with trusted sourcing, real-time support, and bulk-order efficiency. Built by engineers, for engineers.",
    contact: {
      email: "Email: hello@logicloop.in | Phone: +91-9876543210",
      location: "Location: Bengaluru, India"
    }
  };

  document.getElementById("hero-title").textContent = content.hero.title;
  document.getElementById("hero-text").textContent = content.hero.text;

  const productGrid = document.getElementById("product-grid");
  content.products.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${product.title}</h3><p>${product.description}</p>`;
    productGrid.appendChild(div);
  });

  const serviceList = document.getElementById("service-list");
  content.services.forEach(service => {
    const li = document.createElement("li");
    li.textContent = service;
    serviceList.appendChild(li);
  });

  document.getElementById("about-text").textContent = content.about;
  document.getElementById("contact-email").textContent = content.contact.email;
  document.getElementById("contact-location").textContent = content.contact.location;
});
