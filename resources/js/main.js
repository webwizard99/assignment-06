import storeitems from './storeitems.js';

document.addEventListener('onload', () => {
  storeitems.initTestItems();
  const items = storeitems.getItems();
  const storeFrame = document.querySelector('.store-frame');
  items.forEach(item => {
    storeFrame.innerHTML += `
    <div class="store-item">
        <div class="item-pic" style={ background-image: ${item.img}}>
          <p class="reader">${item.alt}</p>
        </div>
        <p class="item-title">${item.name}</p>
        <p class="item-description">Scented Epsom Salt</p>
        <p class="item-price">${item.price}</p>
      </div>
    `
  })
});