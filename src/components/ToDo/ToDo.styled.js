import styled from 'styled-components';

export const Description = styled.p`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;
