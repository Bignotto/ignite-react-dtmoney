import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="DTmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}