import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";
import Presentation from "@components/Presentation";
// import Form from "./components/Form";
import RoadTrip from "./pages/RoadTrip";
import Suggestions from "./pages/Suggestions";
// import Carousel from "./components/carousel";
import Header from "./components/Header";

// import Suggestions from "./pages/Suggestions";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=-139.69&daily=weathercode&current_weather=true&timezone=auto&format=json"
    )
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });

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
