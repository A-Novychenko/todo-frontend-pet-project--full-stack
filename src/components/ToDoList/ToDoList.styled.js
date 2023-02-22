import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;

  gap: 16px;
`;

export const Item = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;

  border: 1px solid grey;
  border-radius: 8px;
`;
