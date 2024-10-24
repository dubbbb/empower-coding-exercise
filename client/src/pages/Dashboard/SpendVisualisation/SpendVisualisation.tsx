import { useEffect, useState } from "react";

import { Category, SpendTracker, Transaction } from "@/types";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import SpendChart from "./SpendChart/SpendChart";
import SpendTrackerButtonList from "./SpendTrackerButtonList/SpendTrackerButtonList";

interface ComponentProps {
  categories: Category[] | undefined;
  spendTrackers: SpendTracker[];
  transactions: Transaction[];
}

const SpendVisualisation: React.FC<ComponentProps> = ({
  categories,
  spendTrackers,
  transactions,
}) => {
  const [selectedTracker, setSelectedTracker] = useState<
    SpendTracker | undefined
  >(undefined);

  const handleSpendTrackerSelect = (object: SpendTracker) => {
    setSelectedTracker(object);
  };

  useEffect(() => {
    setSelectedTracker(undefined);
  }, [spendTrackers]);

  return (
    <Section>
      <>
        <SectionHeading variant="dark">How Are You Tracking?</SectionHeading>
        {spendTrackers.length > 0 ? (
          <>
            <div className="mb-10">
              <SpendTrackerButtonList
                onSelect={handleSpendTrackerSelect}
                spendTrackers={spendTrackers}
              />
            </div>
            <SpendChart
              categories={categories}
              spendTracker={selectedTracker || spendTrackers[0]}
              transactions={transactions}
            />
          </>
        ) : (
          <p className="border-sky-200 border-l-8 border-solid p-4 rounded-lg font-medium text-lg">
            Create a tracker above to get started.
          </p>
        )}
      </>
    </Section>
  );
};

export default SpendVisualisation;
