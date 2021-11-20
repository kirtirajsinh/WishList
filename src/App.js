import './App.css';
import SignIn from './components/SignIn';
import DashBoard from './Pages/DashBoard';
import { Routes, Route } from "react-router-dom";
import Business from './Pages/Business';


function App() {
  return (
    <div className="App">
     
     <Routes>
       <Route path="/" element={<SignIn />} />
       <Route path="/dashboard" element={<DashBoard />} />
       <Route path="/business" element={< Business />} />
     </Routes>
     
    </div>
  );
}

export default App;
