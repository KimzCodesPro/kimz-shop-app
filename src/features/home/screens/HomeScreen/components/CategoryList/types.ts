
export type Category = {
  id: number;
  categoryName: string;
  productsCount: number;
  img: string;
};

export type CategoryListProps = {
  categories: Category[];
};
