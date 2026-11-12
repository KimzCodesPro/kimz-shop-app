import { ProductLineItemCard } from "@/components/ui/card";
import { OrderSummaryListProps } from "./types";

const OrderSummaryList = ({ items }: OrderSummaryListProps) => {
  return items.map((item) => <ProductLineItemCard key={item.id} item={item} />);
};

export default OrderSummaryList;
