// Ano automático no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Animação de entrada ao rolar a página
const reveals = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => io.observe(el));
