import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './PractikFm/Components/Header';
import SignInPages from './PractikFm/Components/pages/SignInPages';
import SignUpPages from './PractikFm/Components/pages/SignUpPages';


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<h1></h1>} />
        <Route path='/login' element={<SignInPages/>} />
        <Route path='/signup' element={<SignUpPages/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
