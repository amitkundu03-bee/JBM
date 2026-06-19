const products = [
  { icon: '🥕', name: 'Rainbow Carrots', farm: 'Green Valley Farm', price: '₹89', stock: '42 packs', eta: '18 min' },
  { icon: '🍅', name: 'Heirloom Tomatoes', farm: 'Sunrise Organics', price: '₹129', stock: '25 boxes', eta: '22 min' },
  { icon: '🥛', name: 'A2 Organic Milk', farm: 'Gaushala Dairy', price: '₹76', stock: '68 bottles', eta: '15 min' },
  { icon: '🌾', name: 'Stoneground Wheat', farm: 'Millet Roots Co-op', price: '₹210', stock: '31 bags', eta: '35 min' }
];

const cameras = [
  { name: 'Farm', detail: 'North field harvest view', theme: 'farm' },
  { name: 'Harvest Area', detail: 'Washing and crate intake', theme: 'harvest' },
  { name: 'Sorting', detail: 'Quality grading table', theme: 'sorting' },
  { name: 'Packaging', detail: 'Currently packing orders', theme: 'packing' },
  { name: 'Dispatch', detail: 'Rider handoff bay', theme: 'dispatch' }
];

const productGrid = document.getElementById('productGrid');
const cameraList = document.getElementById('cameraList');
const cameraScreen = document.getElementById('cameraScreen');
const cameraLabel = document.getElementById('cameraLabel');

products.forEach((product) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-art">${product.icon}</div>
    <span class="badge">Certified Organic</span>
    <h3>${product.name}</h3>
    <div class="meta">Farm source: ${product.farm}<br>Stock: ${product.stock}<br>Delivery ETA: ${product.eta}</div>
    <div class="price-row"><span>${product.price}</span><button class="watch-btn" type="button">Watch Live</button></div>
  `;
  card.querySelector('.watch-btn').addEventListener('click', () => document.getElementById('live').scrollIntoView({ behavior: 'smooth' }));
  productGrid.appendChild(card);
});

function selectCamera(index) {
  const camera = cameras[index];
  cameraLabel.textContent = camera.name;
  cameraScreen.dataset.theme = camera.theme;
  cameraScreen.style.background = {
    farm: 'linear-gradient(#b8e7ff 0 42%, #76aa55 42% 70%, #604527 70%)',
    harvest: 'linear-gradient(135deg, #f6d365, #76aa55 48%, #8b5e34 48%)',
    sorting: 'linear-gradient(135deg, #e8eadf, #b9c9a8 48%, #4f7d39 48%)',
    packing: 'linear-gradient(135deg, #f7efe1, #d7b98e 50%, #384b2a 50%)',
    dispatch: 'linear-gradient(135deg, #dfe7fd, #8aa1c1 48%, #384b2a 48%)'
  }[camera.theme];
  document.querySelectorAll('.camera-option').forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
}

cameras.forEach((camera, index) => {
  const button = document.createElement('button');
  button.className = 'camera-option';
  button.type = 'button';
  button.innerHTML = `<strong>${camera.name}</strong><br><span>${camera.detail}</span>`;
  button.addEventListener('click', () => selectCamera(index));
  cameraList.appendChild(button);
});

function updateClock() {
  const now = new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' });
  document.getElementById('heroTime').textContent = `${now} UTC`;
  document.getElementById('cameraTime').textContent = `${now} UTC`;
}

document.querySelector('.nav-toggle').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('open'));
selectCamera(0);
updateClock();
setInterval(updateClock, 1000);
