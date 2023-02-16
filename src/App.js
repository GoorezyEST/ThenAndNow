import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Before from "./components/before/Before";
import After from "./components/after/After";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/then" element={<Before />} />
        <Route path="/now" element={<After />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
