const storeitems = (function(){
  let items = [];

  const item = function(img, alt, name, price) {
    this.img = img;
    this.alt = alt;
    this.name = name;
    this.price = price;
  }

  return {
    getItems: function() {
      return items;
    },

    setItems: function(newItems) {
      items = newItems;
    },

    initTestItems: function(n) {
      if (items != []) return;
      for (let i = 0; i < n; i++) {
        items.push(new item('../media/joanna-kosinska-Prfs32wh-o4-unsplash.jpg', 'A spoon-full of salt', 'Mint Salt', '$6.97'));
      }
    }

  }
}());
export default storeitems;