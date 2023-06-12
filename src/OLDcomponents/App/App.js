import { FormAdd } from 'components/FormAdd/FormAdd';
import { CloseBtn, Modal } from 'components/Modal';
import { UserMenu } from 'components/UserMenu';
import { GlobalStyle } from 'constants/GlobalStyle';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { Control } from '../Control';

export const App = () => {
  const [todo, setTodo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onChange = addTodo => {
    setTodo(addTodo);
  };
  const toggleModal = () => setShowModal(!showModal);
  return (
    <>
      <UserMenu></UserMenu>
      <Control todo={todo} toggleModal={toggleModal}></Control>
      {showModal && (
        <Modal onClose={toggleModal}>
          <FormAdd onChange={onChange} onClose={toggleModal}></FormAdd>
          <CloseBtn type="button" onClick={toggleModal}>
            <GrClose size={24}></GrClose>
          </CloseBtn>
        </Modal>
      )}
      <GlobalStyle />
    </>
  );
};
