export const cartLocal = {
  set: () => {
    localStorage.setItem("cart", JSON.stringify([]));
  },

  get: () => {
    let json = localStorage.getItem("cart");
    if (json) {
      return JSON.parse(json);
    } else {
      return [];
    }
  },

  // Add an item to the cart in localStorage
  addToCart: (data) => {
    let json = localStorage.getItem("cart");
    let cart = json ? JSON.parse(json) : [];

    const existingItemIndex = cart.findIndex((item) => item.id === data.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += data.quantity;
    } else {
      cart.push(data);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  },

  changeQuantity: (id, change) => {
    let json = localStorage.getItem("cart");
    let cart = json ? JSON.parse(json) : [];

    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      cart[itemIndex].quantity += change;
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  },
};