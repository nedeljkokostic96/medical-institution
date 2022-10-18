import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomAppBar from "./components/header/AppBar";
import HomePage from "./components/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./components/about/AboutPage";
import BooksPage from "./components/books/BooksPage";
import BookDetailsPage from "./components/books/BookDetailsPage";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/book/:title" element={<BookDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
