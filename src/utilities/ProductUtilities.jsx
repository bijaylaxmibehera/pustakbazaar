const isProductInCart = (cart, productId) => {
  return cart.some((product) => product._id === productId);
};

const isProductInWishlist = (wishlist, productId) => {
  return wishlist.some((product) => product._id === productId);
};

const getTotalPrice = (cart) => {
  return cart?.reduce(
    (total, { originalPrice, qty }) => total +  originalPrice * qty,
    0
  );
};

const getTotalDiscount = (cart) => {
  return cart?.reduce((total, product) => {
    const discountPrice = (product.originalPrice - product.price) * product.qty;
    return total + discountPrice;
  }, 0);
};

export {
  isProductInCart,
  isProductInWishlist,
  getTotalPrice,
  getTotalDiscount,
};
