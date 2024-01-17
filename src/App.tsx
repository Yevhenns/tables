import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Profiles } from "./pages/Profiles/Profiles";
import { Campaigns } from "./pages/Campaigns/Campaigns";
import { Layout } from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Route>
    </Routes>
  );
}

export default App;
