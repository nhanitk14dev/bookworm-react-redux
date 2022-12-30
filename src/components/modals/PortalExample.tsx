import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function PortalExample() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        show modal using portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
