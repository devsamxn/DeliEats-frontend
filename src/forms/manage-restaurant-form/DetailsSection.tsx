import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-5">
      <div>
        <h2 className="md:text-2xl font-bold">Details</h2>
        <FormDescription className="md:text-lg">
          Enter the details about your restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="md:text-xl">Name</FormLabel>
            <FormControl className="md:text-lg">
              <Input {...field} className="bg-white" />
            </FormControl>
            <FormMessage className="md:text-lg"/>
          </FormItem>
        )}
      />
      <div className="flex gap-4 ">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="md:text-xl">City</FormLabel>
              <FormControl className="md:text-lg">
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="md:text-xl">Country</FormLabel>
              <FormControl className="md:text-lg">
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage className="md:text-lg"/>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel className="md:text-xl">Delivery price (₹)</FormLabel>
            <FormControl className="md:text-lg">
              <Input {...field} className="bg-white" placeholder="1.50" />
            </FormControl>
            <FormMessage className="md:text-lg"/>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel className="md:text-xl">
              Estimated Delivery Time (minutes)
            </FormLabel>
            <FormControl className="md:text-lg">
              <Input {...field} className="bg-white" placeholder="30" />
            </FormControl>
            <FormMessage className="md:text-lg"/>
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
