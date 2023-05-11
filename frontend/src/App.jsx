import "./App.css";
import Carousel from "@components/carousel";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
