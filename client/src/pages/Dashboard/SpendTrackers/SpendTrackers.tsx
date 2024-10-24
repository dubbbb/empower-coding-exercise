import { useState } from "react";

import { Category, SpendTracker } from "@/types";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import CreateSpendTracker from "./CreateSpendTracker/CreateSpendTracker";
import EditSpendTrackerModal from "./EditSpendTrackerModal/EditSpendTrackerModal";
import SpendTrackerList from "./SpendTrackerList/SpendTrackerList";

interface ComponentProps {
  categories: Category[] | undefined;
  onCreate: (object: SpendTracker) => void;
  onEdit: (object: SpendTracker) => void;
  onRemove: (object: SpendTracker) => void;
  spendTrackers: SpendTracker[];
}

const SpendTrackers: React.FC<ComponentProps> = ({
  categories,
  onCreate,
  onEdit,
  onRemove,
  spendTrackers,
}) => {
  const [editTracker, setEditTracker] = useState<SpendTracker | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);

  const handleOpenChange = (value: boolean) => {
    setEditTracker(undefined);
    setOpen(value);
  };

  const handleEditTracker = (spendTracker: SpendTracker) => {
    setEditTracker(spendTracker);
    setOpen(true);
  };

  const handleSpendTrackerUpdate = (spendTracker: SpendTracker) => {
    setEditTracker(undefined);
    setOpen(false);
    onEdit(spendTracker);
  };

  return (
    <Section variant="dark">
      <>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-4">
            <CreateSpendTracker categories={categories} onCreate={onCreate} />
          </div>
          <div className="col-span-8">
            <SectionHeading>Your Spend Trackers.</SectionHeading>
            <SpendTrackerList
              categories={categories}
              onEdit={handleEditTracker}
              onRemove={onRemove}
              spendTrackers={spendTrackers}
            />
          </div>
        </div>
        <EditSpendTrackerModal
          categories={categories}
          editTracker={editTracker}
          isOpen={open}
          onOpenChange={handleOpenChange}
          onSave={handleSpendTrackerUpdate}
        />
      </>
    </Section>
  );
};

export default SpendTrackers;
