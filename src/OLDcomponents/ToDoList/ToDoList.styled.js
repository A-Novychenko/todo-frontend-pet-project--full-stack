import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 3);
  border: 1px solid green;
  border-radius: 8px;
  min-height: 200px;

  background-color: ${({ backgroundColorDone, backgroundColorPriority }) => {
    if (backgroundColorDone) {
      return 'rgba(0, 0, 0, 0.5)';
    } else if (backgroundColorPriority) {
      return 'rgba(255, 192, 98, 0.5)';
    } else {
      return 'transparent';
    }
  }};

  overflow: hidden;
  cursor: pointer;

  box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  -webkit-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  -moz-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);

  transform: scale(1);

  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Description = styled.p`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export const AddItem = styled.button`
  border-radius: 8px;
  min-height: 200px;
  background-color: white;
  width: 100%;
  height: 100%;

  border: none;
  cursor: pointer;

  color: green;
  transition: color 200ms linear, background-color 200ms linear;

  :hover {
    background-color: green;
    color: white;
  }
`;
