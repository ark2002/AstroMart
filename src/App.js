import "./App.css";

import { Navbar, Footer } from "./frontend/components"
import { Router } from "./frontend/routing/router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
