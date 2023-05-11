import RoadTrip from "./pages/RoadTrip";
import "./App.css";
import Carousel from "./components/carousel";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Header />
      <RoadTrip />
    </div>
  );
}

export default App;
