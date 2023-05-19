import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/header'
import Footer from "./Components/Footer/footer";
import Error from "./Components/Error/error";
import Home from "./Components/Home/home";
import Profile from "./Components/Profile/profile";
import StudentDetails from "./Components/StudentDetails/studentDetails";

function App(){

  return (
      <div>
              <BrowserRouter>
                <Header/>
                  <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/students/:id" element={<StudentDetails />}/>
                      <Route path="/profile" element={<Profile />}/>
                      <Route path="*" element={<Error/>}/>
                  </Routes>
                  <Footer/>
              </BrowserRouter>
     </div>
  )
}

export default App;