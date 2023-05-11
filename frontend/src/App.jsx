import Header from "./components/Header";
import "./App.scss";
// import Form from "./components/Form";
import RoadTrip from "./pages/RoadTrip";
import Carousel from "./components/carousel";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Carousel />
      <RoadTrip />
      {/* <Form /> */}
    </div>
  );
}

export default App;
