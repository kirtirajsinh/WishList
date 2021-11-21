import './App.css';
import SignIn from './components/SignIn';
import DashBoard from './Pages/DashBoard';
import { Routes, Route } from "react-router-dom";
import Business from './Pages/Business';
import React, {useState, useEffect} from 'react';


function App() {
  // const [business, setBusiness] = useState(null);
  const [business, setBusiness] = useState(      {
    "businessName": "Kwik-E-Mart",
    "id": "f0aad200-9d41-4517-887f-751da7eb4ac4",
    "category": {
      "name": "groceries",
      "id": "3410e2f3-8435-4c88-b76c-fd2f7d1d4e80"
    },
    "lat": 29.645933,
    "lng": -82.33365,
    "username": "Apu"
  });

  return (
    <div className="App">
     
     <Routes>
       <Route path="/" element={<SignIn setBusiness={setBusiness} />} />
       <Route path="/dashboard" element={<DashBoard />} />
       <Route path="/business" element={< Business business={business} />} />
     </Routes>
     
    </div>
  );
}

export default App;
