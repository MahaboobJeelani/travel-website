import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';

test('renders travel explorer header', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  
  const logoElement = screen.getByText(/TravelExplorer/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  
  const hotelsLink = screen.getByText(/Hotels/i);
  const blogsLink = screen.getByText(/Blogs/i);
  
  expect(hotelsLink).toBeInTheDocument();
  expect(blogsLink).toBeInTheDocument();
});

test('renders favorites icon', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  
  const favoritesElement = screen.getByText(/Favorites/i);
  expect(favoritesElement).toBeInTheDocument();
});