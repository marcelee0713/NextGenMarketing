import { MainOrderProductPage } from "@/app/components/orders/products";

export default function OrderProduct({ params }: { params: { id: string } }) {
  return (
    <div className="flex w-full h-full bg-secondary relative">
      <MainOrderProductPage orderId={params.id} />
    </div>
  );
}
