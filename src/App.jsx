import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import Form from './components/PriceForm/Form';
import Layout from './Layout';
import './App.css'


function App() {


  return (
    <Routes>


      <Route path="/" element={<Layout />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App
