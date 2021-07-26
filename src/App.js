import Main from "./Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginSignup from "./LoginSignup";
import Login from "./Login";


function App() {
  return (
   
 <Router>
   <Route exact path="/" component={Main}  />
   <Route exact path="/loginsignup" component={LoginSignup}  />
   <Route exact path="/login" component={Login}  />
    
 </Router>
     
    
  
  );
}

export default App;
