import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import RoadTrip from "./pages/RoadTrip";
import Suggestions from "./pages/Suggestions";
import Carousel from "./components/carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Carousel />
        <RoadTrip />
        <Routes>
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
