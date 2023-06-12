import styled from 'styled-components';

export const WrapToDo = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 16px;
`;

export const InnerToDo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: aliceblue;

  padding: 4px;

  button:hover {
    background-color: green;
    color: white;
  }
`;

export const Description = styled.p`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  display: flex;
  flex-grow: 1;
  padding: 20px 24px;
  background-color: white;
  text-align: left;
`;
