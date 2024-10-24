import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Category, SpendTracker } from "@/types";
import { formatAmountForDisplay } from "@/pages/Dashboard/utils/formatAmountForDisplay";
import { getCategoryName } from "@/pages/Dashboard/utils/getCategoryName";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComponentProps {
  categories: Category[] | undefined;
  onEdit: (object: SpendTracker) => void;
  onRemove: (object: SpendTracker) => void;
  spendTrackers: SpendTracker[];
}

const SpendTrackerList: React.FC<ComponentProps> = ({
  categories,
  onEdit,
  onRemove,
  spendTrackers,
}) => {
  return (
    <div className="bg-white border-sky-200 border-4 border-solid rounded-lg p-3">
      <Table>
        <TableCaption>A list of your spend trackers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Spend limit</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spendTrackers.map((spendTracker) => {
            const { categoryId, id, name, spendLimit } = spendTracker;
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{formatAmountForDisplay(spendLimit)}</TableCell>
                <TableCell>{getCategoryName(categories, categoryId)}</TableCell>
                <TableCell className="text-right">
                  <Button
                    className="mr-1"
                    onClick={() => onEdit(spendTracker)}
                    size="icon"
                    variant="outline"
                  >
                    <Pencil2Icon className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => onRemove(spendTracker)}
                    size="icon"
                    variant="outline"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default SpendTrackerList;
