(() => {
  const views = [
    { id: "home", label: "Home" },
    { id: "weddings", label: "Wedding" },
    { id: "traditional", label: "Traditional" },
    { id: "parties", label: "Parties" },
    { id: "portraits", label: "Portraits" },
    { id: "graduation", label: "Graduation" },
    { id: "wildlife-gallery", label: "Wildlife" },
    { id: "about", label: "About" },
    { id: "packages", label: "Packages" },
    { id: "contact", label: "Contact" }
  ];
  const viewIds = new Set(views.map(view => view.id));
  const bookingForm = document.getElementById("bookingForm");
  const bookingService = document.getElementById("bookingService");
  const bookingDate = document.getElementById("bookingDate");
  const bookingName = document.getElementById("bookingName");
  const bookingStatus = document.getElementById("bookingStatus");
  const bookingWhatsApp = document.getElementById("bookingWhatsApp");
  const bookingEmail = document.getElementById("bookingEmail");
  const ratingForm = document.getElementById("ratingForm");
  const ratingEmail = document.getElementById("ratingEmail");

  if (!bookingForm || !bookingService || !bookingDate || !bookingName ||
      !bookingStatus || !bookingWhatsApp || !bookingEmail || !ratingForm ||
      !ratingEmail) {
    throw new Error("Missing booking or rating form controls");
  }

  const today = new Date();
  bookingDate.min = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  function bookingDetails() {
    const date = bookingDate.value;
    const service = bookingService.value;
    const name = bookingName.value.trim();
    return `Hello Visual Vibes Photography, I would like to check availability for a ${service} session on ${date}.${name ? ` My name is ${name}.` : ""}`;
  }

  function updateBookingActions() {
    const valid = bookingForm.checkValidity();
    bookingWhatsApp.disabled = !valid;
    bookingEmail.disabled = !valid;
    bookingStatus.textContent = bookingService.value && bookingDate.value
      ? "Ask the studio to confirm this date. Your booking is not reserved until they confirm."
      : "Select a service and preferred date to ask the studio about availability.";
  }

  [bookingService, bookingDate, bookingName].forEach(field => {
    field.addEventListener("input", updateBookingActions);
    field.addEventListener("change", updateBookingActions);
  });
  updateBookingActions();

  bookingWhatsApp.addEventListener("click", () => {
    if (!bookingForm.reportValidity()) return;
    const url = `https://wa.me/256775615613?text=${encodeURIComponent(bookingDetails())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  bookingEmail.addEventListener("click", () => {
    if (!bookingForm.reportValidity()) return;
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "visualvibesphotographyug@gmail.com",
      su: "Photography date availability",
      body: bookingDetails()
    });
    window.open(`https://mail.google.com/mail/?${params}`, "_blank", "noopener,noreferrer");
  });

  function updateRatingAction() {
    const rating = ratingForm.querySelector('input[name="rating"]:checked');
    ratingEmail.disabled = !rating;
    ratingForm.querySelectorAll(".rating-stars label").forEach(label => {
      label.classList.toggle("is-active", Boolean(rating) &&
        Number(label.querySelector("input").value) <= Number(rating?.value));
    });
  }

  ratingForm.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener("change", updateRatingAction);
  });
  updateRatingAction();

  ratingEmail.addEventListener("click", () => {
    const rating = ratingForm.querySelector('input[name="rating"]:checked');
    if (!rating) {
      ratingForm.reportValidity();
      return;
    }

    const feedback = document.getElementById("ratingFeedback").value.trim();
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "visualvibesphotographyug@gmail.com",
      su: `Photography rating: ${rating.value}/5`,
      body: `Hello Visual Vibes Photography,\n\nMy rating: ${rating.value}/5\n\nFeedback:\n${feedback}`
    });
    window.open(`https://mail.google.com/mail/?${params}`, "_blank", "noopener,noreferrer");
  });

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
  email.href = "https://mail.google.com/mail/?view=cm&fs=1&to=visualvibesphotographyug@gmail.com";
  email.target = "_blank";
  email.rel = "noopener";
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
    const phoneLabel = document.createElement("span");
    phoneLabel.textContent = "Call";
    const phoneNumber = document.createElement("span");
    phoneNumber.className = "phone-number";
    phoneNumber.textContent = "+256 775 615 613";
    phoneLink.append(phoneLabel, phoneNumber);
    phoneLink.setAttribute("aria-label", "Call Visual Vibes Photography on +256 775 615 613");
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
    const bookingChoice = event.target.closest("[data-booking-service]");
    if (bookingChoice) {
      bookingService.value = bookingChoice.dataset.bookingService;
      updateBookingActions();
      showView("contact", true);
      bookingService.focus({preventScroll: true});
      return;
    }

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
