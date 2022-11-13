import Login from "./pages/Login";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { Suspense } from "react";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Updateuserprofile from "./components/Updateuserprofile";
import Moviedetails from "./components/Moviedetails";
import { Usercontext } from "./components/Usercontext";
import { useState } from "react";
import { Moviecontext } from "./components/Moviecontext";


function App() {

  const [user,setuser] = useState(null);
  const [singlemovie,setsinglemovie] = useState(null);
  console.log("context user",user)

  return (
    <BrowserRouter>
   
      <div className="App">
        <Usercontext.Provider value={[user,setuser]}>
          <Moviecontext.Provider value={[singlemovie,setsinglemovie]}>
          <Suspense fallback={<p>loding...</p>}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={ user ?  <Dashboard /> :<Navigate to='/'/> } />
          <Route path="/updateuser" element={ user ? <Updateuserprofile /> :<Navigate to='/'/>} />
          <Route path="dashboard/movie/:id" element={<Moviedetails/>} />
        </Routes>
        </Suspense>
        </Moviecontext.Provider>
        </Usercontext.Provider>
      </div>
   
    </BrowserRouter>
  );
}

export default App;
