import Profile from "./components/profile";
import Layout from "./common/Layout";
import Hero from "./components/hero";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/Product" element={<Hero />} />
        <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
