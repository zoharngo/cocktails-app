import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailsPage from './pages/CocktailsPage';
import NewCocktailPage from './pages/NewCocktailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';
import { Navigate } from 'react-router-dom';
import CocktailDetailsPage from './pages/CocktailDetailsPage';
import './App.css';
import CocktailsProvider from './providers/CocktailsProvider';

function App() {
  const { user } = useContext(UserContext);
  return (
    <CocktailsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/cocktails-app/search' element={user ? <CocktailsPage /> : <Navigate to='/' replace />} />
          <Route path='/cocktails-app/:id' element={user ? <CocktailDetailsPage /> : <Navigate to='/' replace />} />
          <Route path='/cocktails-app/create' element={user ? <NewCocktailPage /> : <Navigate to='/' replace />} />
          <Route path='/cocktails-app' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </CocktailsProvider>
  );
}

export default App;
