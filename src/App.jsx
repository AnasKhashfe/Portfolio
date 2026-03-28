import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import Layout from './LayOut';
import './App.css'


function App() {


  return (
    <Routes>

      <Route path="/" element={<Layout />}>

      </Route>

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App
