import DemoComponent from "./components/FirstComponent"
import WelcomePage from "./components/Welcome";
import InterestSelector from "./components/interestSelector";
import Testimonial from "./components/Testimonial"
import Mathpage from "./components/Mathpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recommendation from "./components/recommandation";
import LearningPath from "./components/LearningPath";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/interest-selector' element={<InterestSelector />} />
        <Route path='/WelcomePage' element={<WelcomePage />} />
        <Route path='/Mathpage' element={<Mathpage />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path= '/recommendations' element={<Recommendation/>}/>
        <Route path='/' element={<DemoComponent />} />
        <Route path ='/learning' element={<LearningPath/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
