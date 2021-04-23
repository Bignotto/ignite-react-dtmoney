import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  transaction.type === "credit"
                    ? transaction.amount
                    : transaction.amount * -1
                )}
              </td>
              <td>{transaction.category}</td>
              <td>
                aaa
                {/* {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
