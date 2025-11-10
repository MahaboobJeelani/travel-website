import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import Blogs from './pages/Blogs';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Privacy from './pages/Privacy';
import { loadFavorites } from './redux/actions/favoriteActions';
import './styles/index.css';

// Initialize favorites from localStorage
store.dispatch(loadFavorites());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotel/:id" element={<HotelDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Privacy />} /> {/* Using same component for demo */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;