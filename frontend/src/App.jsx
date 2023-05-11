import "./App.scss";
import Form from "./components/Form";
import RoadTrip from "./pages/RoadTrip";
import Carousel from "./components/carousel";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Header />
      <RoadTrip />
      <Form />
    </div>
  );
}

export default App;
