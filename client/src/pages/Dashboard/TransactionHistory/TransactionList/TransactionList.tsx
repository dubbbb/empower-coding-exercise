import { formatAmountForDisplay } from "@/pages/Dashboard/utils/formatAmountForDisplay";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "@/types";

import { formatDateForDisplay } from "../utils/formatDateForDisplay";

interface ComponentProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<ComponentProps> = ({ transactions }) => {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Merchant Name</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction: Transaction, index: number) => {
          return (
            <TableRow key={`transaction-${index}`}>
              <TableCell className="font-medium">
                {formatDateForDisplay(transaction.date)}
              </TableCell>
              <TableCell>{transaction.merchant_name}</TableCell>
              <TableCell className="text-right">
                {formatAmountForDisplay(transaction.amount)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionList;
