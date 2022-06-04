import Layout from './common/Layout';
import Carousel from './components/Carousel';


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Carousel />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
