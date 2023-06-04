import { BrowserRouter, Route, Routes } from "react-router-dom";
import Holadok from "./pages/Holadok";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LayoutChallenge from "./pages/LayoutChallenge"
import TwitterEmbed from "./pages/TwitterEmbed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/challenge" element={<LayoutChallenge/>}>
          <Route path="/challenge/holadok" element={<Holadok />} />
          <Route path="/challenge/twitter-embed" element={<TwitterEmbed />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
