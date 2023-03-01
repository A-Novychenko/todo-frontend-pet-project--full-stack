import styled from 'styled-components';

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  min-height: 500px;
  max-width: 700px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;

  box-shadow: 0px 0px 223px 176px rgba(10, 71, 10, 0.71);
  -webkit-box-shadow: 0px 0px 223px 176px rgba(10, 71, 10, 0.71);
  -moz-box-shadow: 0px 0px 223px 176px rgba(10, 71, 10, 0.71);
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 8px;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;
