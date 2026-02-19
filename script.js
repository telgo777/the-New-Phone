document.getElementById("year").textContent = new Date().getFullYear();

const devices = [
  {
    name: "iPhone 11",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    items: ["Changement écran", "Vitre arrière"],
  },
  {
    name: "iPhone 12",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80",
    items: ["Changement écran", "Batterie"],
  },
  {
    name: "Samsung Galaxy S",
    img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=400&q=80",
    items: ["Changement écran", "Batterie"],
  },
  {
    name: "Xiaomi Redmi",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
    items: ["Écran", "Connecteur de charge"],
  },
];

const cards = document.getElementById("cards");

devices.forEach(d => {
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML = `
    <div class="thumb"><img src="${d.img}" alt="${d.name}"></div>
    <h4>${d.name}</h4>
    <ul>${d.items.map(x => `<li>${x}</li>`).join("")}</ul>
    <a class="btn" href="#magasin">Voir / Devis</a>
  `;
  cards.appendChild(el);
});

// Dropdown À propos
document.addEventListener("click", (e) => {
  const drop = document.querySelector(".drop");
  if (!drop) return;

  const btn = drop.querySelector("button");
  const isClickInside = drop.contains(e.target);

  if (isClickInside && e.target === btn) {
    drop.classList.toggle("open");
  } else {
    drop.classList.remove("open");
  }
});

