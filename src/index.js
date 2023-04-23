import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MapPage from "./pages/MapPage";
import BiogramList from "./pages/BiogramList";
import AboutPage from "./pages/AboutPage";
import NoPage from "./pages/NoPage";
import BiogramPage from "./pages/BiogramPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./index.css";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="biogramList" element={<BiogramList />} />
            <Route path="biogram/:id" element={<BiogramPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
