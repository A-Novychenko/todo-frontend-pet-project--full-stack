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
  onStatus,
  id,
}) => {
  return (
    <>
      <WrapToDo>
        <Description completed={completed}>{text}</Description>

        <InnerToDo>
          {!completed &&
            (priority ? (
              <MdLowPriority
                type="button"
                className="js-deleteId"
                onClick={() => onStatus(id, { priority: false })}
                size={28}
                fill={'darkgoldenrod'}
              ></MdLowPriority>
            ) : (
              <FcHighPriority
                type="button"
                className="js-deleteId"
                onClick={() => onStatus(id, { priority: true })}
                size={28}
              ></FcHighPriority>
            ))}
          {completed ? (
            <MdSettingsBackupRestore
              type="button"
              className="js-deleteId"
              onClick={() => onStatus(id, { completed: false })}
              size={28}
              fill={'darkgoldenrod'}
            ></MdSettingsBackupRestore>
          ) : (
            <MdOutlineDoneOutline
              type="button"
              className="js-deleteId"
              onClick={() => onStatus(id, { completed: true })}
              size={28}
              fill={'green'}
            ></MdOutlineDoneOutline>
          )}

          <RiDeleteBinLine
            type="button"
            className="js-deleteId"
            onClick={e => onDeleteTodo(id)}
            size={28}
            fill={'brown'}
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
  priority: PropTypes.bool,
};
