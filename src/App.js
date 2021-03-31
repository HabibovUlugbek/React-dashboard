import Navbar from "./containers/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"

import Main from "./containers/Main";

function App() {
  return (
   <div className="row">
     <div className="col-3 p-0 m-0">
       <Navbar  />
     </div>
      
    <div className="col-9 p-0 m-0">
      <Main />
    </div>
   </div>
  );
}

export default App;
