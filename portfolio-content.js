(() => {
  const galleries = {
    weddings: [
      ["images/Pre wedding shoot/original-wedding-05.webp", "Bride in her wedding gown"],
      ["images/Pre wedding shoot/original-wedding-06.webp", "Black-and-white bridal portrait"],
      ["images/Pre wedding shoot/original-wedding-07.webp", "Bride holding her bouquet"],
      ["images/Pre wedding shoot/original-wedding-08.webp", "Bride with her wedding bouquet"],
      ["images/Pre wedding shoot/original-wedding-09.webp", "Bride and groom together"],
      ["images/Pre wedding shoot/original-wedding-10.webp", "Bride celebrating with her bouquet"]
    ],
    "prewedding-gallery": [
      ["images/Pre wedding shoot/750A2710.jpg.webp", "Pre-wedding portrait"],
      ["images/Pre wedding shoot/750A2715.jpg.webp", "Pre-wedding portrait"],
      ["images/Pre wedding shoot/750A2718.jpg.webp", "Pre-wedding portrait"],
      ["images/Pre wedding shoot/750A2730.jpg.webp", "Pre-wedding portrait"],
      ["images/Pre wedding shoot/750A2732.jpg.webp", "Pre-wedding portrait"],
      ["images/Pre wedding shoot/750A2855.jpg.webp", "Pre-wedding portrait"],
      ["images/Pre wedding shoot/750A3023.jpg.webp", "Pre-wedding celebration"]
    ],
    traditional: [
      ["images/Pre wedding shoot/original-wedding-03.webp", "Bride in traditional introduction attire"],
      ["images/Pre wedding shoot/original-wedding-04.webp", "Bride at a traditional introduction celebration"],
      ["images/traditional-introduction/750A8978-2.jpg.webp", "Traditional introduction portrait"],
      ["images/traditional-introduction/750A8987.jpg.webp", "Traditional ceremony attire"],
      ["images/traditional-introduction/750A9462.jpg.webp", "Celebration in traditional dress"],
      ["images/traditional-introduction/750A9477.jpg.webp", "Traditional celebration portrait"],
      ["images/traditional-introduction/AV7A2081.jpg.webp", "Couple at an introduction ceremony"],
      ["images/traditional-introduction/AV7A2084.jpg.webp", "Introduction ceremony portrait"],
      ["images/traditional-introduction/AV7A2091.jpg.webp", "Family gathering"],
      ["images/traditional-introduction/AV7A2099.jpg.webp", "Traditional ceremony group portrait"],
      ["images/traditional-introduction/BeautyPlus_20261010140053468_save.jpg.webp", "Traditional couple portrait"],
      ["images/traditional-introduction/BeautyPlus_20261010142650776_save.jpg.webp", "Traditional celebration portrait"],
      ["images/traditional-introduction/LDIG2560.JPG.webp", "Kukyala celebration"],
      ["images/traditional-introduction/LDIG2691.JPG.webp", "Kukyala family portrait"]
    ],
    portraits: [
      ["images/portraits/portrait-closeup-01.webp", "Close-up portrait"],
      ["images/portraits/portrait-closeup-02.webp", "Expressive face portrait"],
      ["images/portraits/portrait-closeup-03.webp", "Beauty portrait close-up"]
    ],
    graduation: [
      ["images/graduation/COLE8198.jpg.webp", "Graduate in cap and gown"],
      ["images/graduation/COLE8251.jpg.webp", "Graduation portrait"],
      ["images/graduation/COLE8259.jpg.webp", "Graduate in academic regalia"],
      ["images/graduation/COLE8283.jpg.webp", "Graduation day portrait"],
      ["images/graduation/COLE8309.jpg.webp", "Graduate portrait"],
      ["images/graduation/COLE8329.jpg.webp", "Graduation group portrait"],
      ["images/graduation/COLE8449.jpg.webp", "Graduate celebrating"],
      ["images/graduation/COLE8460.jpg.webp", "Graduation celebration portrait"]
    ],
    "birthday-gallery": [
      ["images/Parties/Birthdays/birthdays-01.webp", "A night made to shine", "Woman celebrating outdoors at night"],
      ["images/Parties/Birthdays/birthdays-02.webp", "Own your moment", "Woman posing outdoors at night"],
      ["images/Parties/Birthdays/birthdays-03.webp", "All eyes on the birthday star", "Woman standing with a man outdoors"],
      ["images/Parties/Birthdays/birthdays-04.webp", "Every detail deserves its moment", "Woman posing for a close-up portrait"],
      ["images/Parties/Birthdays/birthdays-05.webp", "The joy is in the little moments", "Woman smiling with a man outdoors"],
      ["images/Parties/Birthdays/birthdays-06.webp", "A celebration to remember", "Woman and man posing together outdoors"]
    ],
    "shower-gallery": [
      ["images/Parties/baby and bridal showers/showers-01.webp", "A little love is on the way", "Expectant mother in a maternity gown"],
      ["images/Parties/baby and bridal showers/showers-02.webp", "Love grows with every little kick", "Expectant parents sharing a maternity portrait"],
      ["images/Parties/baby and bridal showers/showers-03.webp", "The sweetest new chapter", "Expectant mother celebrating her pregnancy"],
      ["images/Parties/baby and bridal showers/showers-04.webp", "Counting down to our little miracle", "Expectant mother posing for a portrait"],
      ["images/Parties/baby and bridal showers/showers-05.webp", "Already loved beyond measure", "Expectant parents posing together"]
    ],
    "conference-gallery": [
      ["images/Conferences and Business meetings/AV7A7300.webp", "Sharing ideas from the conference stage", "Speaker presenting at the MUBS annual international management conference"],
      ["images/Conferences and Business meetings/AV7A7617.webp", "Perspectives that move us forward", "Panel discussion at the MUBS annual international management conference"],
      ["images/Conferences and Business meetings/AV7A8066.webp", "Together for the next big idea", "Conference participants gathered on stage"]
    ]
  };

  Object.entries(galleries).forEach(([sectionId, photos]) => {
    const section = document.getElementById(sectionId);
    const gallery = section?.classList.contains("gallery")
      ? section
      : section?.querySelector(".gallery");
    if (!gallery) {
      throw new Error(`Missing gallery container for #${sectionId}`);
    }

    gallery.replaceChildren(...photos.map(([src, captionText, alt = captionText]) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = src;
      image.alt = alt;
      image.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.textContent = captionText;
      figure.append(image, caption);
      return figure;
    }));
  });

  const packageSection = document.getElementById("packages");
  const packageGrid = packageSection?.querySelector(".package-grid");
  if (!packageGrid) {
    throw new Error("Missing wedding package grid");
  }

  const intro = packageSection.querySelector(".intro");
  const heading = packageSection.querySelector("h2");
  if (!intro || !heading) {
    throw new Error("Missing wedding package heading or description");
  }
  heading.textContent = "Wedding Photography Packages";
  intro.textContent = "Choose from three photography packages. Prices and deliverables are shown as provided by the studio.";

  const packages = [
    {
      name: "Basic",
      price: "UGX 2,000,000",
      features: ["Photographer", "Videographer", "Light assistant", "150 photos and a highlight video", "A3 photobook", "Online album"]
    },
    {
      name: "Premium",
      price: "UGX 4,000,000",
      features: ["2 photographers and 2 videographers", "Light assistant", "Drone cinematic add-on", "200 photos, a highlight video and feature-length film", "A3 photobooks and a flash drive", "Online album", "3 A3 boards"]
    },
    {
      name: "Premium+",
      price: "UGX 6,000,000",
      features: ["2 photographers and 2 videographers", "Light assistant", "Drone cinematic add-on", "250 photos, a 4K highlight video and feature-length film", "2 A3 photobooks and 2 flash drives", "Online album", "4 A3 boards and 1 A2 board"]
    }
  ];

  packageGrid.replaceChildren(...packages.map(({name, price, features}) => {
    const card = document.createElement("article");
    card.className = "package";

    const title = document.createElement("h3");
    title.textContent = name;
    const amount = document.createElement("div");
    amount.className = "price";
    amount.textContent = price;
    const list = document.createElement("ul");
    list.replaceChildren(...features.map(feature => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }));
    const bookingLink = document.createElement("a");
    bookingLink.className = "small-btn";
    bookingLink.href = "#contact";
    bookingLink.textContent = "Enquire";

    card.append(title, amount, list, bookingLink);
    return card;
  }));

  document.getElementById("wildlife")?.remove();
})();
