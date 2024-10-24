import { Button } from "@/components/ui/button";
import { SpendTracker } from "@/types";

interface ComponentProps {
  onSelect: (object: SpendTracker) => void;
  spendTrackers: SpendTracker[];
}

const SpendVisualisation: React.FC<ComponentProps> = ({
  onSelect,
  spendTrackers,
}) => {
  return (
    <>
      <h2 className="text-sky-800 text-2xl font-bold mb-3">
        Select a tracker to find out.
      </h2>
      {spendTrackers.map((spendTracker) => {
        return (
          <Button
            className="mb-1 mr-1"
            key={spendTracker.id}
            onClick={() => onSelect(spendTracker)}
            variant="outline"
          >
            {spendTracker.name}
          </Button>
        );
      })}
    </>
  );
};

export default SpendVisualisation;
