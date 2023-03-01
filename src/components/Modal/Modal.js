import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalBackDrop, ModalContent } from 'components/Modal';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEsc);
  }

  handleCloseEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <>
        <ModalBackDrop onClick={this.handleCloseBackdrop}>
          <ModalContent>{children}</ModalContent>
        </ModalBackDrop>
      </>,
      modalRoot
    );
  }
}
