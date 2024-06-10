import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import InventoryCard from './components/Home/InventoryCard/InventoryCard.jsx';
import Create from './components/AddInstruments/AddInstruments.jsx';
import './App.css';
import EditInstrument from './components/EditInstrument/EditInstrument.jsx';

function App() {
  return (
    <>
      <Nav />
      <h1>Instrument Rental Management</h1>
      <Routes>
        <Route path="/" element={<InventoryCard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/instruments/:productId" element={<EditInstrument />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
