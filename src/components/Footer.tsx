import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        padding: '15px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        fontSize: '0.6rem',
        boxShadow: '0 0 10px rgba(243, 239, 239, 0.5)',
        background: 'black',
      }}
    >
      <p
        style={{
          margin: 0,
        }}
      >
        Copyrights © {new Date().getFullYear()}
      </p>
      <Link
        style={{
          textDecoration: 'none',
          color: 'white',
        }}
        to='https://github.com/zoharngo/'
      >
        ZN
      </Link>
    </footer>
  );
}

export default Footer;
