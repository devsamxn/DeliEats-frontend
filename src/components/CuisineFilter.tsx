import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisinesList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisinesList);
  };

  const handleCuisinesReset = () => onChange([]);

  return (
    <>
      <div className="md:text-lg flex justify-between items-center">
        <div className="font-semibold mb-2">filter by cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          reset
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-1 gap-1 md:mt-3">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 9)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer md:text-[17px] rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}
      </div>

      <Button onClick={onExpandedClick} variant="link" className="mt-4 flex-1 w-full text-center">
        {isExpanded ? (
          <span className="flex flex-row items-center">
            View Less <ChevronUp />
          </span>
        ) : (
          <span className="flex flex-row items-center">
            View More <ChevronDown />
          </span>
        )}
      </Button>
    </>
  );
};

export default CuisineFilter;
