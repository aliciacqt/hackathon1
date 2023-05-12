import { Routes, Route } from "react-router-dom";
import "./App.scss";

import RoadTrip from "./pages/RoadTrip";
import Suggestions from "./pages/Suggestions";
import Presentation from "./components/Presentation";
// import Carousel from "./components/carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      {/* <Carousel /> */}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/roadtrip/trip/:id" element={<RoadTrip />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
