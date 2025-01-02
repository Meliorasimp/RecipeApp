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

const App = () => {
  const [usersdata, setUsersdata] = useState(localStorage.getItem('username') || '');

  const usernameurl = usersdata.replace(/\s+/g, '-');

  const handleLogin = () => {
    localStorage.setItem('username', usersdata);
    setUsersdata(usersdata);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage onLogin={handleLogin} />} />
          {usersdata ? (
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
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
