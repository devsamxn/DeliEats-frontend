import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-5 font-mono">
      {orders.map((order) => (
        <div className="space-y-5 bg-gray-200 p-10 rounded-lg">
          <div>
            <OrderStatusHeader order={order} />
          </div>
          <div className="md:flex md:flex-row gap-10">
            <AspectRatio ratio={16/4.5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
            <div className="grid gap-10 md:grid-cols-2 py-2">
              <OrderStatusDetail order={order} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
