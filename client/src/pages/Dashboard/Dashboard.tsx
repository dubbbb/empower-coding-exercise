import { useEffect, useState } from "react";
import axios from "axios";

import { Account, Category, SpendTracker, Transaction } from "@/types";
import { API_ENDPOINT } from "@/constants";
import Header from "@/components/Header/Header";

import { sortAccountsByName } from "./utils/sortAccountsByName";
import Accounts from "./Accounts/Accounts";
import SpendTrackers from "./SpendTrackers/SpendTrackers";
import SpendVisualisation from "./SpendVisualisation/SpendVisualisation";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

interface ComponentProps {}

const Dashboard: React.FC<ComponentProps> = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [spendTrackers, setSpendTrackers] = useState<SpendTracker[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getAccounts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${API_ENDPOINT}/accounts`,
      });
      if (response.status == 200) {
        setAccounts(sortAccountsByName(response.data));
      }
    } catch (error) {
      // Handle error
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${API_ENDPOINT}/categories`,
      });
      if (response.status == 200) {
        setCategories(response.data);
      }
    } catch (error) {
      // Handle error
    }
  };

  const getTransactions = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${API_ENDPOINT}/transactions`,
      });
      if (response.status == 200) {
        setTransactions(response.data);
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleCreateSpendTracker = (object: SpendTracker) => {
    setSpendTrackers([...spendTrackers, object]);
  };

  const handleEditSpendTracker = (object: SpendTracker) => {
    const index = spendTrackers.findIndex(
      (spendTracker) => spendTracker.id === object.id
    );

    if (index !== -1) {
      setSpendTrackers([
        ...spendTrackers.slice(0, index),
        { ...spendTrackers[index], ...object },
        ...spendTrackers.slice(index + 1),
      ]);
    } else {
      // No match
    }
  };

  const handleRemoveSpendTracker = (object: SpendTracker) => {
    setSpendTrackers(
      spendTrackers.filter((spendTracker) => spendTracker.id !== object.id)
    );
  };

  useEffect(() => {
    getAccounts();
    getCategories();
    getTransactions();
  }, []);

  return (
    <>
      <Header />

      <SpendTrackers
        categories={categories}
        onCreate={handleCreateSpendTracker}
        onEdit={handleEditSpendTracker}
        onRemove={handleRemoveSpendTracker}
        spendTrackers={spendTrackers}
      />

      <SpendVisualisation
        categories={categories}
        spendTrackers={spendTrackers}
        transactions={transactions}
      />

      <Accounts accounts={accounts} />

      <TransactionHistory accounts={accounts} transactions={transactions} />
    </>
  );
};

export default Dashboard;
