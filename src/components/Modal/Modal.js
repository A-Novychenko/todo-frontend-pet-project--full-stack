import { ModalBackDrop, ModalContent } from 'components/Modal';

export const Modal = ({ children }) => (
  <ModalBackDrop>
    <ModalContent>{children}</ModalContent>
  </ModalBackDrop>
);
