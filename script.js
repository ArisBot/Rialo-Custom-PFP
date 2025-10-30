const canvas = document.getElementById('pfpCanvas');
const ctx = canvas.getContext('2d');
const assetOptions = document.getElementById('assetOptions');
const downloadBtn = document.getElementById('downloadBtn');

const categories = ['background','backpack', 'bodybase', 'eye', 'mouth', 'hair', 'costume'];

categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.textContent = cat;
  btn.onclick = () => loadAsset(cat);
  assetOptions.appendChild(btn);
});

function loadAsset(category) {
  const img = new Image();
  img.src = `assets/${category}/1.png`;
  img.src = `assets/${category}/2.png`; 
  img.src = `assets/${category}/3.png`; 
  img.src = `assets/${category}/4.png`; // contoh file pertama
  img.onload = () => ctx.drawImage(img, 0, 0, 512, 512);
}

downloadBtn.onclick = () => {
  const link = document.createElement('a');
  link.download = 'rialo-pfp.png';
  link.href = canvas.toDataURL();
  link.click();
};



