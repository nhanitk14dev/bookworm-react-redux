import { ModalStyle } from './Modal.style'

type ModalProps = {
  onClose: () => void;
};

export default function ModalContent({ onClose }: ModalProps) {
  return (
    <ModalStyle className="modal">
      <div className="modal-header">
        <button onClick={onClose}>Close</button>
      </div>
      <div className="modal-content">
        <p>Some text in the modal..</p>
      </div>
    </ModalStyle>
  );
}
