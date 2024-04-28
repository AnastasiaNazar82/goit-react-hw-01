import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.table_tr}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.table_body}>
        {transactions.map((transaction) => {
          return (
            <tr className={css.transaction} key={transaction.id}>
              <td className={css.details}>{transaction.type}</td>
              <td className={css.details}>{transaction.amount}</td>
              <td className={css.details}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
