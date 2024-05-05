import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from '../components/Routes.jsx';
import UserContext from '../context/userContext.js';
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from 'react-hot-toast';

function App() {
  const [data, setData] = useState({});
  const [isConnected, setisConnected] = useState(false);


  return (
    <PrimeReactProvider>
      <UserContext.Provider value={{ setData, setisConnected,isConnected ,data}}>
        <BrowserRouter>
          <Routes>
            {PublicRoutes.map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
        <Toaster />
      </UserContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;
