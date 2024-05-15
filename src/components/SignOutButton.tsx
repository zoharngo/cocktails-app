import { googleLogout } from '@react-oauth/google';
import { useCallback } from 'react';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function SignOutButton() {
  const navigate = useNavigate();
  const { signOut, user } = useContext(UserContext);

  const onSignOut = useCallback(() => {
    googleLogout();
    signOut();
    navigate('/');
  }, [signOut, navigate]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          backgroundColor: 'inherit',
          color: 'white',
          borderRadius: '5px',
          border: '1px solid lightgray',
          cursor: 'pointer',
          fontSize: '0.8rem',
          boxShadow: '0 2px 5px #9e9292',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          padding: '5px 10px',
          width: '115px',

        }}
        onClick={onSignOut}
      >
      
        Sign Out
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 2px 5px #9e9292',
            border: '1px solid lightgray',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
          }}
        >
          {user && (
            <img
              alt='user'
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
              src={user.picture}
              referrerPolicy='no-referrer'
            />
          )}
        </span>
      </button>
    </div>
  );
}

export default SignOutButton;
