import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import "./index.css";
import "./App.css";
import Keynote from "./pages/keynotes.jsx";
import BookTristan from "./pages/bookTristan.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Testimonial from "./pages/testimonials.jsx";
import Media from "./pages/media.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/keynotes" element={<Keynote />} />
        <Route path="/book-tristan" element={<BookTristan />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
