import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then(response => console.log(response.data));
  }, []);

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
          <tr>
            <td>Hamburguer</td>
            <td className="debit">R$ -30,00</td>
            <td>Comida</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Venda de Site</td>
            <td className="credit">R$ 12.000,00</td>
            <td>Receita</td>
            <td>12/04/2021</td>
          </tr>
          <tr>
            <td>Gasolina</td>
            <td className="debit">R$ -129,00</td>
            <td>Combustivel</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="debit">R$ -200,00</td>
            <td>Internet</td>
            <td>14/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
