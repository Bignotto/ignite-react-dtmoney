import { useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionCategoryContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import creditImg from "../../assets/income.svg";
import debitImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewtransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("");

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

      <Container>
        <h2>Nova transação:</h2>
        <input placeholder="Descrição" />
        <input type="number" placeholder="Valor" />

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

        <input placeholder="Categoria" />
        <button
          type="button"
          className="react-modal-save-button"
          onClick={onRequestClose}
        >
          Salvar
        </button>
      </Container>
    </Modal>
  );
}
