import React, { useContext } from "react";
import cx from "classnames";
// Components
import { Transaction } from "../components";
// Context
import { GlobalContext } from "../../Context/GlobalProvider";
// Styles
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <fieldset
      className={cx(
        styles.container,
        transactions.length ? null : styles.emptyContainer
      )}
    >
      <legend>Transaction History</legend>
      {transactions.length ? (
        <ul>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <div className={styles.noTransaction}>
          <img className={styles.addIcon} src="/images/add2.png" alt="" />
          <h4 className={styles.text}>Add transactions to see history.</h4>
        </div>
      )}
    </fieldset>
  );
};

export default TransactionHistory;
