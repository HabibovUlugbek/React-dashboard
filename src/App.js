import Navbar from "./containers/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"

import Main from "./containers/Main";

function App() {
  return (
   <div style={{overflowX:"hidden"}} className="row">
     <div className="col-md-3 p-0 m-0 d-none d-md-block">
       <Navbar  />
     </div>
      
    <div style={{overflowX:"hidden"}}  className=" col-md-9 col-12 p-0 m-0">
      <Main />
    </div>
   </div>
  );
}

export default App;
