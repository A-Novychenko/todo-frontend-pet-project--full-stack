import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 32px;
  padding-right: 32px;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;

  padding-left: 32px;
  padding-right: 32px;

  border: 1px solid grey;
  border-radius: 8px;

  cursor: pointer;
`;

export const Description = styled.p`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;
