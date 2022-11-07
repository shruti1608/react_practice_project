import Login from "./pages/Login";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Updateuserprofile from "./components/Updateuserprofile";
import { useQuery } from "@tanstack/react-query";
import { getusercall } from "./apicalls";

function App() {

  // const {data : User } = useQuery(["user"],getusercall)
  // console.log("user",User)
  return (
    <BrowserRouter>
   
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/updateuser" element={<Updateuserprofile />} />
        </Routes>
      </div>
   
    </BrowserRouter>
  );
}

export default App;
