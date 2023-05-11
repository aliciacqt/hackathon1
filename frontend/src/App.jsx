import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoadTrip from "./pages/RoadTrip";
import Carousel from "./components/carousel";
import Header from "./components/Header";
import Suggestions from "./pages/Suggestions";

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
      </div>
    </Router>
  );
}

export default App;
