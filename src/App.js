import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './HomePage';
import Plumbing_Services from "./Plumbing_Services";
import Electrical_Services from "./Electrical_Services"
import Additional_Services from "./Additional_Services"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PlumbingServices" element={<Plumbing_Services/>}/>
        <Route path="/ElectricalServices" element={<Electrical_Services/>}/>
        <Route path="/AdditionalServices" element={<Additional_Services/>}/>
      </Routes>
    </Router>
  );
}

export default App;
