import Layout from './common/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';


import { Routes, Route } from 'react-router-dom'
import ForgetPass from './pages/ForgetPass';
import ForgetPassModal from './components/ForgetPassModal';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgetpass' element={<ForgetPass />}></Route>
        <Route path='/forgetpassmodal' element={<ForgetPassModal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
