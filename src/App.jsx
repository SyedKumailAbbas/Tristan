import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import "./index.css";
import Keynote from "./pages/keynotes.jsx";
import BookTristan from "./pages/bookTristan.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/keynotes" element={<Keynote />} />
        <Route path="/book-tristan" element={<BookTristan />} />
      </Routes>
    </Router>
  );
}

export default App;
