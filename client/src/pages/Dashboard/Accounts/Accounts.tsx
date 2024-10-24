import { Account } from "@/types";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import AccountList from "./AccountList/AccountList";

interface ComponentProps {
  accounts: Account[];
}

const AccountOverview: React.FC<ComponentProps> = ({ accounts }) => {
  return (
    <Section variant="light">
      <>
        <SectionHeading variant="dark">Your Connected Accounts.</SectionHeading>
        <AccountList accounts={accounts} />
      </>
    </Section>
  );
};

export default AccountOverview;
