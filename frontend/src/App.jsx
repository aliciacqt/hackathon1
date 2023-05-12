import { Routes, Route } from "react-router-dom";
import "./App.scss";
import RoadTrip from "./pages/RoadTrip";
import Suggestions from "./pages/Suggestions";
import Presentation from "./components/Presentation";
import Carousel from "./components/carousel";
import Header from "./components/Header";

function App() {
  return (
    <main className="App">
      <Header />
      <Presentation />
      <Carousel />

      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/roadtrip" element={<RoadTrip />} />
      </Routes>
    </main>
  );
}

export default App;
