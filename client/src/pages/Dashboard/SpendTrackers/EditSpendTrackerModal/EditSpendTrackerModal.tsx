import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Category, SpendTracker } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { decimalPlaceNumberToString } from "../utils/decimalPlaceNumberToString";
import { stringToDecimalPlaceNumber } from "../utils/stringToDecimalPlaceNumber";

interface ComponentProps {
  categories: Category[] | undefined;
  editTracker: SpendTracker | undefined;
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  onSave: (object: SpendTracker) => void;
}

const EditSpendTrackerModal: React.FC<ComponentProps> = ({
  categories,
  editTracker,
  isOpen,
  onOpenChange,
  onSave,
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

  const handleOpenChange = (value: boolean) => {
    onOpenChange(value);
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

  const handleSave = () => {
    if (categoryId && name && spendLimit && editTracker && editTracker.id) {
      const spendTracker: SpendTracker = {
        categoryId,
        id: editTracker.id,
        name,
        spendLimit: stringToDecimalPlaceNumber(spendLimit),
      };
      onSave(spendTracker);
    } else {
      // Validation failed
    }
  };

  useEffect(() => {
    if (editTracker) {
      setCategoryId(editTracker.categoryId);
      setName(editTracker.name);
      setSpendLimit(decimalPlaceNumberToString(editTracker.spendLimit));
    }
  }, [editTracker]);

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-sky-800 text-2xl font-bold mb-1">
              Edit Your Spend Tracker.
            </h2>
          </DialogTitle>
          <DialogDescription>
            <span className="mb-5">
              You can change your spend tracker name, category and spend limit.
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={handleNameChange}
            placeholder="Enter a name"
            type="text"
            value={name}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
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

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="spendLimit">Spend limit</Label>
          <Input
            id="spendLimit"
            onChange={handleSpendLimitChange}
            placeholder="Enter an amount in dollars"
            type="string"
            value={spendLimit}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditSpendTrackerModal;
