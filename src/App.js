import Layout from './common/Layout';
import Homepage from './pages/Homepage';


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
