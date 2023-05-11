import "./App.scss";
// import Form from "./components/Form";
// import RoadTrip from "./pages/RoadTrip";
import Trip from "@components/Trip";
import Carousel from "./components/carousel";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      {/* <RoadTrip /> */}
      {/* <Form /> */}
      <Trip />
    </div>
  );
}

export default App;
