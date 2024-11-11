import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Badges from "./pages/Badges";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="badge" element={<Badges />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
