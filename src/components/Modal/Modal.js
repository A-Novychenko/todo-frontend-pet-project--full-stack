import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalBackDrop, ModalContent } from 'components/Modal';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.addEventEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.addEventEsc);
  }

  addEventEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <>
        <ModalBackDrop>
          <ModalContent>{children}</ModalContent>
        </ModalBackDrop>
      </>,
      modalRoot
    );
  }
}
