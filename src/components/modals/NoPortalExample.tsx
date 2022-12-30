import { useState } from "react";
import ModalContent from "./ModalContent";

export default function NoPortalExample() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal without portal
      </button>
      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </>
  );
}
