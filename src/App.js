import Navbar from "./Components/Navbar";
import Home from './views/Home';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Iftar from "./Components/namazVakitleri/Iftar";

function App() {

  return (
    <>
      <div className="bg-gray-200 pb-10">
        <Navbar />
        {/* <div className="container px-6 mx-auto">
          <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-96">

          </div>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sehir/:sehir" element={<Iftar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
