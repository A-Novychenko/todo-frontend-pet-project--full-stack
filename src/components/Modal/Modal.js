import Modal from 'react-modal';
import { Description } from 'components/ToDoList';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const Backdrop = ({ isOpenModal, isCloseModal, data }) => {
  const { completed, description } = data;
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={isCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Description completed={completed}>{description}</Description>
      <button onClick={isCloseModal}>close</button>
    </Modal>
  );
};
