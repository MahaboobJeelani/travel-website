// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';
// import Home from './pages/Home';
// import Hotels from './pages/Hotels';
// import HotelDetail from './pages/HotelDetail';
// import Blogs from './pages/Blogs';
// import Favorites from './pages/Favorites';
// import About from './pages/About';
// import Privacy from './pages/Privacy';
// import { loadFavorites } from './redux/actions/favoriteActions';
// import './styles/index.css';
// import BlogDetails from './pages/BlogDetails';

// // Initialize favorites from localStorage
// store.dispatch(loadFavorites());

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/hotels" element={<Hotels />} />
//               <Route path="/hotel/:id" element={<HotelDetail />} />
//               <Route path="/blogs" element={<Blogs />} />
//               <Route path="/favorites" element={<Favorites />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/privacy" element={<Privacy />} />
//               <Route path="/terms" element={<Privacy />} />
//               <Route path='/readblog/:id' element={<BlogDetails/>}/>
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

// App.js - Updated with premium styling
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
import BlogDetails from './pages/BlogDetails';
import { Toaster } from 'react-hot-toast';

// Initialize favorites from localStorage
store.dispatch(loadFavorites());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App min-h-screen flex flex-col bg-beige">
          <Header />
          <Toaster position="top-right" toastOptions={{
              duration: 3000,
              style: { background: '#3A3A3A', color: '#D8CFC4', border: '1px solid #C8A24A', borderRadius: '4px', fontFamily: 'Inter, sans-serif', padding: '12px 16px' },
              success: {
                iconTheme: {
                  primary: '#C8A24A',
                  secondary: '#3A3A3A',
                },
              },
            }}
          />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotel/:id" element={<HotelDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Privacy />} />
              <Route path='/readblog/:id' element={<BlogDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;