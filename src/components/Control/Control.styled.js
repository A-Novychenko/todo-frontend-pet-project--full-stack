import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;

  width: 1200px;
  text-align: center;
`;
export const Header = styled.div`
  /* margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;

  width: 1200px;
  text-align: center; */
  background-color: #a3c9a3;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Controls = styled.div`
  margin-bottom: 30px;

  button {
    transition: color 250ms linear, background-color 250ms linear;
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  button:hover {
    background-color: green;
    color: white;
  }
`;

export const BtnPage = styled.button`
  padding: 12px;
  margin-bottom: 12px;
  width: 150px;

  border-radius: 8px;
  border: 1px solid green;

  color: green;
  font-weight: 500;

  cursor: pointer;

  :nth-child(1) {
    background-color: ${props => (props.page === 'all' ? 'green' : 'white')};
    color: ${props => (props.page === 'all' ? 'white' : 'green')};
  }
  :nth-child(2) {
    background-color: ${props => (props.page === 'active' ? 'green' : 'white')};
    color: ${props => (props.page === 'active' ? 'white' : 'green')};
  }
  :nth-child(3) {
    background-color: ${props =>
      props.page === 'completed' ? 'green' : 'white'};
    color: ${props => (props.page === 'completed' ? 'white' : 'green')};
  }
`;
export const AddDelBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  button:hover {
    background-color: green;
    color: white;
  }
`;
export const AddBtn = styled.button`
  padding: 12px;
  width: 240px;

  border-radius: 8px;
  border: 1px solid green;

  color: green;
  font-weight: 500;

  background-color: white;

  cursor: pointer;
  /* transition: color 250ms linear, background-color 250ms linear; */
  :nth-child(2):hover {
    background-color: red;
    color: white;
  }
`;
