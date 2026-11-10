(() => {
  const views = [
    { id: "home", label: "Home" },
    { id: "weddings", label: "Wedding" },
    { id: "traditional", label: "Traditional" },
    { id: "portraits", label: "Portraits" },
    { id: "graduation", label: "Graduation" },
    { id: "wildlife-gallery", label: "Wildlife" },
    { id: "about", label: "About" },
    { id: "packages", label: "Packages" },
    { id: "contact", label: "Contact" }
  ];
  const viewIds = new Set(views.map(view => view.id));
  const sideNav = document.createElement("nav");
  sideNav.className = "category-side-nav";
  sideNav.setAttribute("aria-label", "Browse photography collections");
  const links = new Map();

  views.forEach(({id, label}) => {
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = label;
    links.set(id, link);
    sideNav.appendChild(link);
  });

  const sideContact = document.createElement("div");
  sideContact.className = "side-contact";
  const whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/256775615613";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener";
  whatsapp.textContent = "WhatsApp the studio";
  const phone = document.createElement("a");
  phone.href = "tel:+256775615613";
  phone.textContent = "Call +256 775 615 613";
  const email = document.createElement("a");
  email.href = "mailto:visualvibesphotographyug@gmail.com";
  email.textContent = "Email the studio";
  sideContact.append(whatsapp, phone, email);
  sideNav.appendChild(sideContact);
  document.body.appendChild(sideNav);

  const headerLinks = document.querySelector(".navlinks");
  if (headerLinks) {
    const bookLink = headerLinks.querySelector(".book");
    if (bookLink) {
      bookLink.href = whatsapp.href;
      bookLink.target = "_blank";
      bookLink.rel = "noopener";
      bookLink.textContent = "WhatsApp";
      bookLink.setAttribute("aria-label", "Chat with Visual Vibes Photography on WhatsApp");
    }

    const phoneLink = document.createElement("a");
    phoneLink.id = "phoneLink";
    phoneLink.href = phone.href;
    phoneLink.textContent = "Call";
    phoneLink.setAttribute("aria-label", "Call Visual Vibes Photography");
    headerLinks.appendChild(phoneLink);
  }

  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
    link.target = "_blank";
    link.rel = "noopener";
  });

  function showView(id, updateHistory) {
    const viewId = viewIds.has(id) ? id : "home";
    document.body.dataset.view = viewId;
    document.querySelectorAll(".category-side-nav a").forEach(link => {
      link.setAttribute("aria-current", link.hash === `#${viewId}` ? "page" : "false");
    });

    const activeSection = document.getElementById(viewId);
    if (activeSection) activeSection.scrollTop = 0;
    if (updateHistory && location.hash !== `#${viewId}`) {
      history.pushState({viewId}, "", `#${viewId}`);
    }
  }

  document.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    let id = link.getAttribute("href").slice(1);
    if (id === "gallery") {
      const tileName = link.textContent.toLowerCase();
      id = tileName.includes("introduction") ? "traditional"
        : tileName.includes("couple") ? "portraits"
        : "weddings";
    }
    if (!viewIds.has(id)) return;

    event.preventDefault();
    showView(id, true);
  });

  window.addEventListener("popstate", () => {
    showView(location.hash.slice(1), false);
  });

  showView(location.hash.slice(1), false);
})();
