import "./App.css";

import { Navbar, Footer } from "./frontend/components";
import { Router } from "./frontend/routing/router";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
      <ToastContainer className="toast__style" />
    </div>
  );
}

export default App;
