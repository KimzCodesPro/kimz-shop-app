export type CartItemProps = {
  itemId: string;
  image: string;
  product: string;
  color: string;
  price: number;
  quantity: number;
  selected: boolean;
  onItemSelected: (itemId: string) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
};
