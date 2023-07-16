import "./App.css";
import Navigation from "./components/Navigation";
import Herosection from "./components/Herosection";
const App = () => {   
  
  // function name is in capital letteer -> component !function

  return(
    <div>     
      <Navigation />
      <Herosection />
    </div>
  )
};

export default App;