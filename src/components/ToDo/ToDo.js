import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FcHighPriority } from 'react-icons/fc';
import {
  MdOutlineDoneOutline,
  MdLowPriority,
  MdSettingsBackupRestore,
} from 'react-icons/md';

import { Description, WrapToDo, InnerToDo } from './ToDo.styled';

export const ToDo = ({
  completed,
  priority,
  text,
  onDeleteTodo,
  onCompletedTodo,
  onHighPriorityTodo,
  id,
}) => {
  return (
    <>
      <WrapToDo>
        <Description completed={completed}>{text}</Description>

        <InnerToDo>
          {/* <input
            type="checkbox"
            name="checkbox"
            checked={completed}
            onChange={() => onCompletedTodo(id)}
          ></input> */}
          {!completed &&
            (priority ? (
              <MdLowPriority
                type="button"
                className="js-deleteId"
                onClick={e => onHighPriorityTodo(id)}
                size={28}
              ></MdLowPriority>
            ) : (
              <FcHighPriority
                type="button"
                className="js-deleteId"
                onClick={e => onHighPriorityTodo(id)}
                size={28}
              ></FcHighPriority>
            ))}
          {completed ? (
            <MdSettingsBackupRestore
              type="button"
              className="js-deleteId"
              onClick={e => onCompletedTodo(id)}
              size={28}
            ></MdSettingsBackupRestore>
          ) : (
            <MdOutlineDoneOutline
              type="button"
              className="js-deleteId"
              onClick={e => onCompletedTodo(id)}
              size={28}
            ></MdOutlineDoneOutline>
          )}

          <RiDeleteBinLine
            type="button"
            className="js-deleteId"
            onClick={e => onDeleteTodo(id)}
            size={28}
          ></RiDeleteBinLine>
        </InnerToDo>
      </WrapToDo>
    </>
  );
};

ToDo.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
