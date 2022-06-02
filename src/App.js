import Layout from './common/Layout';


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
