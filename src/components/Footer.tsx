import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#282c34',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        color: 'white',
      }}
    >
      <p
        style={{
          margin: 0,
        }}
      >
        Copyright © {new Date().getFullYear()}
      </p>
      <Link
        style={{
          textDecoration: 'none',
          color: 'white',
        }}
        to='https://github.com/zoharngo/'
      >
        Zohar Nyego
      </Link>
    </footer>
  );
}

export default Footer;
