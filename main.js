const figures = [
  {
    name: "Rectángulo azul",
    description: "Rectángulo relleno con un recorte y un contorno.",
    draw(ctx) {
      ctx.fillStyle = "#2388ff";
      ctx.fillRect(115, 70, 180, 180);
      ctx.clearRect(145, 100, 80, 80);
      ctx.strokeStyle = "#5be1ff";
      ctx.lineWidth = 4;
      ctx.strokeRect(152, 107, 66, 66);
    }
  },
  {
    name: "Triángulo rojo",
    description: "Triángulo relleno construido mediante segmentos de línea.",
    draw(ctx) {
      ctx.fillStyle = "#ff426d";
      ctx.beginPath();
      ctx.moveTo(260, 65);
      ctx.lineTo(315, 125);
      ctx.lineTo(205, 125);
      ctx.closePath();
      ctx.fill();
    }
  },
  {
    name: "Cara feliz",
    description: "Figura circular con ojos y una sonrisa trazada con arcos.",
    draw(ctx) {
      ctx.strokeStyle = "#5be1ff";
      ctx.fillStyle = "rgba(91,225,255,.12)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(260, 180, 90, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(260, 180, 60, 0, Math.PI, false);
      ctx.stroke();

      ctx.fillStyle = "#5be1ff";
      ctx.beginPath();
      ctx.arc(235, 160, 8, 0, Math.PI * 2);
      ctx.arc(285, 160, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  },
  {
    name: "Triángulo relleno",
    description: "Triángulo sólido definido por tres puntos.",
    draw(ctx) {
      ctx.fillStyle = "#8f7cff";
      ctx.beginPath();
      ctx.moveTo(155, 80);
      ctx.lineTo(350, 80);
      ctx.lineTo(155, 275);
      ctx.closePath();
      ctx.fill();
    }
  },
  {
    name: "Triángulo contorneado",
    description: "Triángulo cerrado representado únicamente mediante su contorno.",
    draw(ctx) {
      ctx.strokeStyle = "#5be1ff";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(350, 275);
      ctx.lineTo(350, 80);
      ctx.lineTo(155, 275);
      ctx.closePath();
      ctx.stroke();
    }
  },
  {
    name: "Arcos",
    description: "Matriz de arcos con diferentes ángulos y sentidos de trazado.",
    draw(ctx) {
      ctx.strokeStyle = "#5be1ff";
      ctx.fillStyle = "#9b7cff";
      ctx.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          const x = 150 + j * 110;
          const y = 70 + i * 75;
          const radius = 28;
          const endAngle = Math.PI + (Math.PI * j) / 2;
          const counterclockwise = i % 2 !== 0;
          ctx.arc(x, y, radius, 0, endAngle, counterclockwise);
          if (i > 1) ctx.fill(); else ctx.stroke();
        }
      }
    }
  },
  {
    name: "Curva cuadrática",
    description: "Ejemplo de trazado mediante quadraticCurveTo().",
    draw(ctx) {
      ctx.strokeStyle = "#5be1ff";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(120, 85);
      ctx.quadraticCurveTo(55, 85, 55, 150);
      ctx.quadraticCurveTo(55, 215, 105, 215);
      ctx.quadraticCurveTo(105, 250, 65, 260);
      ctx.quadraticCurveTo(120, 250, 130, 215);
      ctx.quadraticCurveTo(400, 215, 400, 150);
      ctx.quadraticCurveTo(400, 85, 330, 85);
      ctx.stroke();
    }
  },
  {
    name: "Curva cúbica",
    description: "Ejemplo de curva Bézier cúbica mediante bezierCurveTo().",
    draw(ctx) {
      ctx.fillStyle = "rgba(155,124,255,.72)";
      ctx.strokeStyle = "#5be1ff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(260, 90);
      ctx.bezierCurveTo(260, 84, 245, 65, 210, 65);
      ctx.bezierCurveTo(150, 65, 150, 130, 150, 130);
      ctx.bezierCurveTo(150, 165, 190, 210, 260, 255);
      ctx.bezierCurveTo(330, 210, 370, 165, 370, 130);
      ctx.bezierCurveTo(370, 130, 370, 65, 310, 65);
      ctx.bezierCurveTo(275, 65, 260, 84, 260, 90);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  },
  {
    name: "Robot / rectángulos redondeados",
    description: "Composición final del código original usando roundedRect(), arcos, líneas y curvas Bézier.",
    draw(ctx) {
      ctx.strokeStyle = "#5be1ff";
      ctx.fillStyle = "#5be1ff";
      ctx.lineWidth = 3;

      roundedRect(ctx, 155, 55, 220, 245, 24);
      roundedRect(ctx, 168, 68, 220, 245, 14);
      roundedRect(ctx, 218, 118, 70, 45, 10);
      roundedRect(ctx, 218, 210, 70, 24, 6);
      roundedRect(ctx, 335, 118, 70, 45, 10);
      roundedRect(ctx, 335, 210, 36, 70, 10);

      ctx.beginPath();
      ctx.arc(190, 88, 18, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(182, 88);
      ctx.fill();

      for (let i = 0; i < 8; i++) ctx.fillRect(210 + i * 19, 86, 5, 5);
      for (let i = 0; i < 6; i++) ctx.fillRect(307, 107 + i * 20, 5, 5);
      for (let i = 0; i < 8; i++) ctx.fillRect(210 + i * 19, 166, 5, 5);

      ctx.beginPath();
      ctx.moveTo(260, 206);
      ctx.lineTo(260, 187);
      ctx.bezierCurveTo(260, 176, 268, 168, 280, 168);
      ctx.bezierCurveTo(292, 168, 300, 176, 300, 187);
      ctx.lineTo(300, 206);
      ctx.lineTo(294, 200);
      ctx.lineTo(288, 206);
      ctx.lineTo(282, 200);
      ctx.lineTo(276, 206);
      ctx.lineTo(270, 200);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#07101d";
      ctx.beginPath();
      ctx.arc(272, 183, 3, 0, Math.PI * 2);
      ctx.arc(288, 183, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
];

let current = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const title = document.getElementById("figureTitle");
const description = document.getElementById("figureDescription");
const currentNumber = document.getElementById("currentNumber");
const totalNumber = document.getElementById("totalNumber");
const dots = document.getElementById("dots");
const grid = document.getElementById("figureGrid");

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function drawFigure() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  figures[current].draw(ctx);
  ctx.restore();

  title.textContent = figures[current].name;
  description.textContent = figures[current].description;
  currentNumber.textContent = String(current + 1).padStart(2, "0");

  document.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === current));
  document.querySelectorAll(".figure-item").forEach((item, i) => item.classList.toggle("active", i === current));
}

function buildNavigation() {
  totalNumber.textContent = String(figures.length).padStart(2, "0");

  figures.forEach((figure, i) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.title = figure.name;
    dot.setAttribute("aria-label", `Mostrar ${figure.name}`);
    dot.addEventListener("click", () => { current = i; drawFigure(); });
    dots.appendChild(dot);

    const item = document.createElement("button");
    item.className = "figure-item";
    item.innerHTML = `<span class="num">${String(i + 1).padStart(2, "0")}</span><span class="name">${figure.name}</span>`;
    item.addEventListener("click", () => {
      current = i;
      drawFigure();
      document.querySelector(".viewer-card").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    grid.appendChild(item);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + figures.length) % figures.length;
  drawFigure();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % figures.length;
  drawFigure();
});

function setDate() {
  const now = new Date();
  document.getElementById("currentDate").textContent = now.toLocaleDateString("es-MX", {
    day: "2-digit", month: "2-digit", year: "numeric"
  });
  document.getElementById("copyrightYear").textContent = now.getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setDate();
  buildNavigation();
  drawFigure();
});
