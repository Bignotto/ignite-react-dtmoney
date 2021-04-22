import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionCategoryContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import creditImg from "../../assets/income.svg";
import debitImg from "../../assets/outcome.svg";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewtransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await api.post("transactions", {
      id: Math.floor(Math.random() * 99),
      title,
      amount,
      type,
      category,
      createdAt: new Date(),
    });
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar nova transação" />
      </button>

      <Container onSubmit={event => handleCreateNewTransaction(event)}>
        <h2>Nova transação:</h2>
        <input
          placeholder="Descrição"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />

        <TransactionCategoryContainer>
          <RadioBox
            activeColor="green"
            isSelected={type === "credit"}
            type="button"
            onClick={() => {
              setType("credit");
            }}
          >
            <img src={creditImg} alt="Credit" />
            <span>Crédito</span>
          </RadioBox>
          <RadioBox
            activeColor="red"
            isSelected={type === "debit"}
            type="button"
            onClick={() => {
              setType("debit");
            }}
          >
            <img src={debitImg} alt="Debit" />
            <span>Débito</span>
          </RadioBox>
        </TransactionCategoryContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button className="react-modal-save-button" type="submit">
          Salvar
        </button>
      </Container>
    </Modal>
  );
}
