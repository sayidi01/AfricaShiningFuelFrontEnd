import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PublicRoutes} from '../components/Routes.jsx'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
          {PublicRoutes.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
