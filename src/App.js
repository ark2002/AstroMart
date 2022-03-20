import "./App.css";
import { Footer } from "./frontend/components/Footer/Footer";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Homescreen } from "./frontend/screens/Homescreen/Homescreen";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
      <Footer />
    </div>
  );
}

export default App;
