import RoadTrip from "@pages/RoadTrip";
import "./App.css";
import Carousel from "@components/carousel";
import Map from "@components/MapApi";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Header />
      <Map position={[48.858093, 2.2946944]} />
      <RoadTrip />
    </div>
  );
}

export default App;
