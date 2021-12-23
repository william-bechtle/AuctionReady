import LoginPage from "./pages/Login";
import EstatePage from "./pages/Estate";
import CapturePage from "./pages/CapturePage";
import FullManifestPage from "./pages/FullManifest";
import CatManifestPage from "./pages/CatManifest";
import LogoutPage from "./pages/Logout";
import ItemPage from "./pages/ItemPage";
import EstatePage2 from "./pages/Estate2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element = {<LoginPage />} />
          <Route path='/estate' element = {<EstatePage />} />
          <Route path='/capturepage' element = {<CapturePage />} />
          <Route path='/fullmanifest' element = {<FullManifestPage />} />
          <Route path='/catmanifest' element = {<CatManifestPage />} />
          <Route path='/item' element = {<ItemPage />} />
          <Route path="/estate2" element= {<EstatePage2 /> } />
          <Route path='/logout' element = {<LogoutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;