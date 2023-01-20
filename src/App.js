import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Genre from "./components/Genre";
import Home from "./components/Home/Home";
import Login from "./components/user/Login";
import Navbar from "./components/Nav/Navbar";
import SingleMovie from "./components/SingleMovie/SingleMovie";


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/single-movie" element={<SingleMovie/>} />
         <Route path="/genre" element={<Genre/>} />
         <Route path="/account" element={<Account/>} />
         <Route path="/login" element={<Login/>} />
         {/* <Route path="*" element={<NotFound/>} /> */}
       </Routes>
    </BrowserRouter>

  );
}

export default App;
