const calculateDiscountPercentage = (price: number, discountPrice: number) => {
  return discountPrice
    ? `-${Math.round(((price - discountPrice) / price) * 100)}%`
    : "";
};

export default calculateDiscountPercentage;
