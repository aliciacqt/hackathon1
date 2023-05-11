import { Routes, Route } from "react-router-dom";
import "./App.scss";

// import Form from "./components/Form";
import RoadTrip from "./pages/RoadTrip";
import Carousel from "./components/carousel";
import Header from "./components/Header";
// import Suggestions from "./pages/Suggestions";

function App() {
  return (
    <main className="App">
      <Header />
      <Carousel />
      {/* <RoadTrip />
      <Form /> */}
      <Routes>
        {/* <Route path="/suggestions" element={<Suggestions />} /> */}
        <Route path="/roadtrip" element={<RoadTrip />} />
      </Routes>
    </main>
  );
}

export default App;
