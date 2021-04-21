import Modal from "react-modal";
import { Container } from "./styles";

import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewtransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
        <input placeholder="Categoria" />
        <button>Salvar</button>
      </Container>
    </Modal>
  );
}
