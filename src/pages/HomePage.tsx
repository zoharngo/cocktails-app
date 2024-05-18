import background from '../assets/images/home.jpg';
import PageWrapper from '../components/PageWrapper';

function HomePage() {
  return (
    <PageWrapper>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -10,
          top: 0,
          display: 'flex',
          height: '100vh',
        }}
      >
        <img
          alt='background'
          style={{
            objectFit: 'cover',
            width: '100vw',
            zIndex: -1,
          }}
          src={background}
        />
      </div>
      <div
        style={{
          paddingTop: '48px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          height: '100%',
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
        <p
          style={{
            maxWidth: '30%',
            fontSize: '1.5rem',
          }}
        >
          This app allows you to search for cocktails, view details about them, and even create your own cocktails.
        </p>
      </div>
    </PageWrapper>
  );
}

export default HomePage;
