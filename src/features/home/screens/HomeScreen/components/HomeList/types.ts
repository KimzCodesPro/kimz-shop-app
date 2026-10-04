
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
  img: string;
};

export type BrandItem = {
  id: number;
  name: string;
  logo: string;
};

export type HomeListProps = {
  slides: ProductSlide[];
  products: Product[];
  brands: BrandItem[];
};
