import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Description } from './ToDo.styled';

export const ToDo = ({
  completed,
  text,
  onDeleteTodo,
  onCompletedTodo,
  id,
}) => {
  return (
    <>
      <input
        type="checkbox"
        name="checkbox"
        checked={completed}
        onChange={() => onCompletedTodo(id)}
      ></input>
      <Description completed={completed}>{text}</Description>
      <RiDeleteBinLine
        type="button"
        className="js-deleteId"
        onClick={e => onDeleteTodo(id)}
        size={32}
      >
        Удалить
      </RiDeleteBinLine>
    </>
  );
};

ToDo.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
