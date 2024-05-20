import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useCallback, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../common/types/user';

function SignInButton() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSuccess = useCallback(
    (credRes: CredentialResponse) => {
      const credtialsDecode = credRes.credential && jwtDecode(credRes.credential);
      const { name, email, picture } = credtialsDecode as User;
      setUser({ name, email, picture });
      navigate('/cocktails-app/search');
    },
    [navigate, setUser]
  );

  const onError = useCallback(() => {
    console.log('Login Error');
    navigate('/cocktails-app');
  }, [navigate]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GoogleLogin
        type='standard'
        cancel_on_tap_outside
        locale='en'
        logo_alignment='left'
        shape='circle'
        size='small'
        theme='filled_blue'
        text='signin_with'
        useOneTap
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  );
}

export default SignInButton;
