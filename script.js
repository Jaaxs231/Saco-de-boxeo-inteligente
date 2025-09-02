// Animación de entrada para el título y texto
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const subtitle = document.querySelector("p");
  const btn = document.querySelector(".btn");

  // Fade-in animado
  title.style.opacity = 0;
  subtitle.style.opacity = 0;
  btn.style.opacity = 0;

  setTimeout(() => {
    title.style.transition = "opacity 2s ease";
    title.style.opacity = 1;
  }, 300);

  setTimeout(() => {
    subtitle.style.transition = "opacity 2s ease";
    subtitle.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    btn.style.transition = "opacity 2s ease";
    btn.style.opacity = 1;
  }, 1700);
});

// Vibración del botón al pasar el mouse
const button = document.querySelector(".btn");
if (button) {
  button.addEventListener("mouseenter", () => {
    button.style.animation = "shake 0.3s";
  });
  button.addEventListener("animationend", () => {
    button.style.animation = "";
  });
}

// Efecto scroll para info.html
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".info p, .info h2");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
// Mostrar estadísticas al dar clic
const showStatsBtn = document.getElementById("showStats");
const statsSection = document.getElementById("statsSection");

if (showStatsBtn) {
  showStatsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statsSection.style.display = "block";
    statsSection.scrollIntoView({ behavior: "smooth" });
  });
}
    // Contadores animados
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        // Animación de entrada con delay
        setTimeout(() => card.classList.add('visible'), index * 150);

        // Contador
        const counter = card.querySelector('.counter');
        if(counter) {
            let value = parseInt(card.dataset.values.split(',')[0]); // toma primer valor como ejemplo
            let count = 0;
            const interval = setInterval(() => {
                if(count < value){
                    count++;
                    counter.textContent = count;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        }

        // Hover para actualizar gráfica
        card.addEventListener('mouseenter', () => {
            const values = card.dataset.values.split(',').map(Number);
            performanceChart.data.datasets[0].data = values; // ejemplo: actualizar la primera línea
            performanceChart.update();
        });
    });
    const text = "Saco de Boxeo Inteligente";
let i = 0;
const typed = document.getElementById("typedText");
function typeWriter() {
  if (i < text.length) {
    typed.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

