import background from '../assets/images/home.jpg';

function HomePage() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -10,
          filter: 'brightness(0.5)',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        <img
          alt='background'
          style={{
            objectFit: 'cover',
            width: '100%',
          }}
          src={background}
          referrerPolicy='no-referrer'
        />
      </div>
      <div
        style={{
          paddingTop: '48px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          color: '#f09999',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)',
          padding: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            margin: 0,
            padding: 0,
          }}
        >
          Welcome to the Cocktail App
        </h1>
        <span
          style={{
            maxWidth: '33.3%',
            fontSize: '1.5rem',
            wordBreak: 'break-word',
          }}
        >
          This app allows you to search for cocktails, view details about them, and even create your own cocktails.
        </span>
      </div>
    </>
  );
}

export default HomePage;
