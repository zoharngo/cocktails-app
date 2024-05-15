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
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1rem',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
        }}
        to='/'
      >
        <h1
          style={{
            fontSize: 'inherit',
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
            fontSize: '0.8rem',
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
