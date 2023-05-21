import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import ArtistsList from "./Components/Home/home";
import ArtistDetails from "./Components/ArtistDetails/details";

function App(){

  return (
      <div>
          <div className="allComp">
              <BrowserRouter>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<ArtistsList />}/>
                      <Route path="/artists/:id" element={<ArtistDetails/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
  )
}

export default App;