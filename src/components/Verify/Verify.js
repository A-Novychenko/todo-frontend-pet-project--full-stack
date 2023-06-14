import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { verifyUser } from 'redux/auth/authOperations';

export const Verify = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const verifyCode = searchParams.get('verifyCode');

  const onHandleClick = () => {
    dispatch(verifyUser(verifyCode));
  };

  return (
    <button type="button" onClick={onHandleClick}>
      click to verify
    </button>
  );
};
