import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate} from "react-router-dom";
import Movielist from "../components/Movielist";
import Userlogo from "../components/Userlogo";


export default function Dashboard() {
 
  return (
    <body style={{ backgroundColor: "lightgray" }}>
     
        <div>
          <nav style={{ background: "orange", padding: "10px" }}>
          <ErrorBoundary fallback={<Navigate to='/'/>}>
            <Suspense fallback={<p>loding....</p>}>
              <Userlogo />
            </Suspense>
          </ErrorBoundary>
          </nav>
         <ErrorBoundary fallback={<p>something went wrong</p>}>
          <Suspense fallback={<p>loding....</p>}>
            <Movielist />
          </Suspense>
        </ErrorBoundary> 
        </div>
    </body>
  );
}
