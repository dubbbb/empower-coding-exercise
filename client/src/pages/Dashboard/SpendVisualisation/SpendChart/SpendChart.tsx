import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Category, SpendTracker, Transaction } from "@/types";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatAmountForDisplay } from "@/pages/Dashboard/utils/formatAmountForDisplay";
import { getCategoryName } from "@/pages/Dashboard/utils/getCategoryName";

import { ChartData } from "./types";
import { generateChartData } from "./utils/generateChartData";

interface ComponentProps {
  categories: Category[] | undefined;
  spendTracker: SpendTracker;
  transactions: Transaction[];
}

const chartConfig = {
  spendLimit: {
    label: "Spend limit",
    color: "hsl(var(--chart-1))",
  },
  currentSpend: {
    label: "Spent",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const SpendChart: React.FC<ComponentProps> = ({
  categories,
  spendTracker,
  transactions,
}) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const { categoryId, name, spendLimit } = spendTracker;

  const NUMBER_OF_DAYS_IN_HISTORY = 7;
  const twRose800 = "#9f1239";
  const twSky800 = "#075985";

  useEffect(() => {
    if (spendTracker) {
      setChartData(
        generateChartData(
          categoryId,
          NUMBER_OF_DAYS_IN_HISTORY,
          spendLimit,
          transactions
        )
      );
    }
  }, [spendTracker]);

  return (
    <>
      <h2 className="text-gray-700 text-center text-xl font-medium mb-4">
        <span className="text-sky-800 font-bold">{name}</span> with a spend
        limit of{" "}
        <span className="text-rose-800 font-bold">
          ${formatAmountForDisplay(spendLimit)}
        </span>{" "}
        for{" "}
        <span className="text-sky-800 font-bold">
          {getCategoryName(categories, categoryId)}
        </span>
        .
      </h2>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis domain={[0, (dataMax: any) => Math.ceil(dataMax * 1.1)]} />
          <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            dataKey="spendLimit"
            type="monotone"
            stroke={twRose800}
            strokeWidth={4}
            dot={false}
          />
          <Line
            dataKey="currentSpend"
            type="monotone"
            stroke={twSky800}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};

export default SpendChart;
