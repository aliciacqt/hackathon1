import RoadTrip from "@pages/RoadTrip";
import "./App.css";
import Carousel from "./components/carousel";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Carousel />
      <RoadTrip />
    </div>
  );
}

export default App;
