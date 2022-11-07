

import Movielist from "../components/Movielist";
import Userlogo from "../components/Userlogo";


export default function Dashboard() {
  
  return (
    <body style={{backgroundColor:"lightgray"}}>
      <div>
        <nav style={{ background: "orange" ,padding:"10px"}}>
          <Userlogo/>
        </nav>
        <Movielist/>
      </div>
    </body>
  );
}
