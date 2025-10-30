const canvas = document.getElementById("pfpCanvas");
const ctx = canvas.getContext("2d");
const layers = {
  background: null,
  bodybase: null,
  eye: null,
  mouth: null,
  hair: null,
};

// Load options dynamically
const folders = ["background", "bodybase", "eye", "mouth", "hair"];

folders.forEach(folder => {
  fetch(`assets/${folder}/`)
    .then(() => {
      const div = document.getElementById(`${folder}-options`);
      // manual listing (karena GitHub Pages tidak izinkan directory listing)
      const files = ["1.png", "2.png", "3.png"]; // nanti ganti sesuai nama file kamu
      files.forEach(file => {
        const img = document.createElement("img");
        img.src = `assets/${folder}/${file}`;
        img.addEventListener("click", () => selectAsset(folder, img.src, img));
        div.appendChild(img);
      });
    });
});

function selectAsset(layer, src, element) {
  layers[layer] = src;
  document.querySelectorAll(`#${layer}-options img`).forEach(img => img.classList.remove("selected"));
  element.classList.add("selected");
  redrawCanvas();
}

function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const layer in layers) {
    if (layers[layer]) {
      const img = new Image();
      img.src = layers[layer];
      img.onload = () => ctx.drawImage(img, 0, 0, 512, 512);
    }
  }
}

document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "rialo-pfp.png";
  link.href = canvas.toDataURL();
  link.click();
});
