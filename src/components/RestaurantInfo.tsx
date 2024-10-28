import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-slate text-center">
      <CardHeader className="gap-3">
        <CardTitle className="md:text-3xl text-xl font-bold tracking-tight text-center">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription className="text-base md:text-lg text-center">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex md:text-lg">
        <div className="flex flex-1 justify-evenly">
          {restaurant.cuisines.map((item) => (
            <div className="flex">
              <div>{item}</div>
              {/* {index < restaurant.cuisines.length - 1 && <Dot />} */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
