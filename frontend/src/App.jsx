import "./App.scss";
// import Form from "./components/Form";
// import RoadTrip from "./pages/RoadTrip";
import Carousel from "./components/carousel";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Carousel />
      {/* <RoadTrip />
      <Form /> */}
    </div>
  );
}

export default App;
