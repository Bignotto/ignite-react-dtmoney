import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Créditos</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1.004,37</strong>
      </div>
      <div>
        <header>
          <p>Débitos</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <strong>R$ 1.004,37</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="income" />
        </header>
        <strong>R$ 1.004,37</strong>
      </div>
    </Container>
  );
}
