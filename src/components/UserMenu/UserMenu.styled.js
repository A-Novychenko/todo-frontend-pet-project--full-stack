import styled from 'styled-components';

export const UserBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.isLogin ? 'green' : 'red')};
  padding: 4px;
  gap: 20px;
`;

export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  gap: 20px;
  cursor: pointer;

  border-radius: 4px;
  color: white;

  :hover {
    background-color: greenyellow;
    color: black;
    font-weight: 700;
  }
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
