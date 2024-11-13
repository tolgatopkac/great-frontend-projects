import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Badges from "./pages/Badges";
import Buttons from "./pages/Buttons";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="badge" element={<Badges />} />
        <Route path="button" element={<Buttons />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
