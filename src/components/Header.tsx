import { Link } from 'react-router-dom';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Header() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <header
      style={{
        boxShadow: '0 2px 20px rgba(252, 250, 250, 0.5)',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'black',
      }}
    >
      <Link
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
        to='/'
      >
        <h1
          style={{
            fontSize: '1.5rem',
            textShadow: '2px 2px 20px rgba(250, 242, 242, 0.5)',
            margin: 0,
          }}
        >
          Cocktail Recipes
        </h1>
      </Link>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            margin: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}
        >
          {user && (
            <>
              <li>
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  to='/cocktails'
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  to='/cocktails/create'
                >
                  Create
                </Link>
              </li>
            </>
          )}

          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {user ? <SignOutButton /> : <SignInButton />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
