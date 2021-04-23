import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "credit") {
        acc.credits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.debits += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      credits: 0,
      debits: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Créditos</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.credits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Débitos</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.debits)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="income" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
