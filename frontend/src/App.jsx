import Map from "@components/MapApi";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />

      <Map position={[48.858093, 2.2946944]} />
    </div>
  );
}

export default App;
