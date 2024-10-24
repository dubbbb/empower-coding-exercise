import { useState } from "react";
import { nanoid } from "nanoid";

import { Button } from "@/components/ui/button";
import { Category, SpendTracker } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { stringToDecimalPlaceNumber } from "../utils/stringToDecimalPlaceNumber";

interface ComponentProps {
  categories: Category[] | undefined;
  onCreate: (object: SpendTracker) => void;
}

const CreateSpendTracker: React.FC<ComponentProps> = ({
  categories,
  onCreate,
}) => {
  const [categoryId, setCategoryId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [spendLimit, setSpendLimit] = useState<string>("");

  const handleCategoryChange = (value: string) => {
    setCategoryId(value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSpendLimitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    // Regex to allow only positive numbers with up to two decimal places
    if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
      setSpendLimit(inputValue);
    } else {
      // Validation failed
    }
  };

  const handleCreate = () => {
    if (categoryId && name && spendLimit) {
      const spendTracker: SpendTracker = {
        categoryId,
        id: nanoid(),
        name,
        spendLimit: stringToDecimalPlaceNumber(spendLimit),
      };
      onCreate(spendTracker);
      resetSelection();
    } else {
      // Validation failed
    }
  };

  const resetSelection = () => {
    setCategoryId("");
    setName("");
    setSpendLimit("");
  };

  return (
    <div className="bg-sky-600 border-sky-200 border-l-8 border-solid p-6 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-3">
        Create a Spend Tracker.
      </h2>

      <p className="text-sky-200 text-md font-semibold mb-3">
        Configure your spend tracker with a name, category and spend limit.
      </p>

      <div className="bg-white border-sky-200 border-4 border-solid rounded-lg p-3">
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={handleNameChange}
            placeholder="Enter a name"
            type="text"
            value={name}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <Label>Category</Label>
          <Select onValueChange={handleCategoryChange} value={categoryId}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories && categories.length > 0
                ? categories.map((category) => {
                    return (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    );
                  })
                : null}
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <Label htmlFor="spendLimit">Spend limit</Label>
          <Input
            id="spendLimit"
            onChange={handleSpendLimitChange}
            placeholder="Enter an amount in dollars"
            type="text"
            value={spendLimit}
          />
        </div>

        <Button onClick={handleCreate} size="lg">
          Create tracker
        </Button>
      </div>
    </div>
  );
};

export default CreateSpendTracker;
