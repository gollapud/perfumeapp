import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import PerfumeDescription from "./pages/perfumedescription";
import PerfumeReviews from "./pages/perfumereviews";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/perfume-description" element={<PerfumeDescription />} />
          <Route path="/perfume-reviews" element={<PerfumeReviews />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);
}


export default App;
