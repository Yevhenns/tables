import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Profiles } from "./pages/Profiles/Profiles";
import { Campaigns } from "./pages/Campaigns/Campaigns";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:accountId" element={<Profiles />} />
        <Route path="/:accountId/:profileId" element={<Campaigns />} />
      </Route>
    </Routes>
  );
}

export default App;
