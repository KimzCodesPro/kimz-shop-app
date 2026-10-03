
export type ProductSlide = {
  id: number;
  title: string;
  shopName: string;
  img: string;
};

export type Product = {
  productName: string;
  brand: string;
  price: number;
};

export type HomeListProps = {
  slides: ProductSlide[];
  products: Product[];
};
