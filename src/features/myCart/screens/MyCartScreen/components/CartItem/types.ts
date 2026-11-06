export type CartItemProps = {
  image: string;
  product: string;
  color: string;
  price: number;
  quantity: number;
  selected: boolean;
  onToggleSelect: () => void;
};
