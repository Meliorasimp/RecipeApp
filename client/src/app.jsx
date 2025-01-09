import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Userprofile from './pages/Userprofile';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppetizerEditor from './pages/AppetizerEditor';
import Cuisines from './pages/Cuisines';
import Spanish from './pages/cuisinepages/Spanish';
import Japanese from './pages/cuisinepages/Japanese';
import Italian from './pages/cuisinepages/Italian';
import Indian from './pages/cuisinepages/Indian';
import Chinese from './pages/cuisinepages/Chinese';
import French from './pages/cuisinepages/French';
import Mexican from './pages/cuisinepages/Mexican';
import Greek from './pages/cuisinepages/Greek';
import Thai from './pages/cuisinepages/Thai';
import Korean from './pages/cuisinepages/Korean';
import American from './pages/cuisinepages/American';
import Philippines from './pages/cuisinepages/Philippines';
import Peruvian from './pages/cuisinepages/Peruvian';
import Ethiopian from './pages/cuisinepages/Ethiopian';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const usernameurl = localStorage.getItem('username');


  const handleLogin = () => { 
    console.log('User logged in');
  };

  return (
    <div>
      <BrowserRouter>
        { isLoggedIn ? null : <Navbar /> }
        <Routes>
          <Route path='/' element={<Homepage hasUserLoggedIn={handleLogin} />} />
          {usernameurl ? (
            <>
              <Route path={`/dashboard/${usernameurl}`} element={<Userprofile />} />
              <Route path={`/dashboard/${usernameurl}/appetizeredit`} element={<AppetizerEditor />} />
            </>
          ) : (
            <Route path="*" element={<div>Please log in to access the dashboard.</div>} />
          )}
          <Route path='/editor' element={<AppetizerEditor />} />
          <Route path='/cuisines' element={<Cuisines />}></Route>
          <Route path='/cuisines/spanish' element={<Spanish />}></Route>  
          <Route path='/cuisines/japanese' element={<Japanese />}></Route>
          <Route path='/cuisines/italian' element={<Italian />}></Route>
          <Route path='/cuisines/indian' element={<Indian />}></Route>
          <Route path='/cuisines/chinese' element={<Chinese />}></Route>
          <Route path='/cuisines/french' element={<French />}></Route>
          <Route path='/cuisines/mexican' element={<Mexican />}></Route>
          <Route path='/cuisines/greek' element={<Greek />}></Route>
          <Route path='/cuisines/thai' element={<Thai />}></Route>
          <Route path='/cuisines/korean' element={<Korean />}></Route>
          <Route path='/cuisines/american' element={<American />}></Route>
          <Route path='/cuisines/philippines' element={<Philippines />}></Route>
          <Route path='/cuisines/peruvian' element={<Peruvian />}></Route>
          <Route path='/cuisines/ethiopian' element={<Ethiopian />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
