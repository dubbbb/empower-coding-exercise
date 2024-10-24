import { formatAmountForDisplay } from "@/pages/Dashboard/utils/formatAmountForDisplay";

interface ComponentProps {
  balance: number;
  currency: "USD";
  name: string;
}

const AccountDetail: React.FC<ComponentProps> = ({
  balance,
  currency,
  name,
}) => {
  return (
    <div className="bg-sky-600 border-l-8 border-solid border-sky-800 px-8 py-6 rounded-lg">
      <h2 className="text-white font-semibold text-xl mb-4">{name}</h2>
      <p className="text-white">
        <span className="font-light text-2xl relative bottom-3">{`$ `}</span>
        <span className="font-bold text-5xl">
          {formatAmountForDisplay(balance)}
        </span>
        <span className="font-light text-2xl">{` ${currency}`}</span>
      </p>
    </div>
  );
};

export default AccountDetail;
