import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders" className="space-y-5">
      <TabsList className="font-mono">
        <TabsTrigger value="orders" className="md:text-xl font-bold">
          Orders
        </TabsTrigger>
        <TabsTrigger value="manage-restaurant" className="md:text-xl font-bold">
          Manage Restaurant
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 py-6 px-10 rounded-2xl font-mono"
      >
        <h2 className="md:text-2xl font-bold">{orders?.length} Active Orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
