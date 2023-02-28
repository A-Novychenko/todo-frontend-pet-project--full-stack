import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 20px;
  margin-bottom: 30px;
`;
// export const List = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(240px, auto));
//   gap: 24px;
//   padding-left: 32px;
//   padding-right: 32px;

//   list-style: none;
// `;

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 3);
  border: 1px solid grey;
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
`;

// export const Item = styled.li`
//   display: flex;

//   padding-left: 32px;
//   padding-right: 32px;

//   border: 1px solid grey;
//   border-radius: 8px;

//   cursor: pointer;

//   width: 400px;
//   height: 200px;
// `;

export const Description = styled.p`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export const AddItem = styled.button`
  /* display: flex;
  flex-basis: calc((100% - 60px) / 3);
  border: 1px solid grey; */
  border-radius: 8px;
  min-height: 200px;
  background-color: white;
  width: 100%;
  height: 100%;

  border: none;
  cursor: pointer;
`;
// export const AddItem = styled.button`
//   display: flex;

//   padding-left: 32px;
//   padding-right: 32px;

//   border: 1px solid grey;
//   border-radius: 8px;

//   cursor: pointer;

//   width: 400px;
//   height: 200px;
// `;
