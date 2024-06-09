import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import InventoryCard from './components/Home/InventoryCard/InventoryCard.jsx';
import Create from './components/AddInstruments/AddInstruments.jsx';
import './App.css';




function App() {
  return (
    <>
      <Nav />
      <h1>Instrument Rental Management</h1>
      <Routes>
        <Route path="/" element={<InventoryCard />} />
        <Route path="/create" element={<Create />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newInstrument, setNewInstrument] = useState([]);
  
  {isCreateOpen ? (
    <Create 
    id="create"
    newInstrument = {newInstrument}
    handleAddInstrument={handleAddInstrument} />
  ) : null}
  
  return <>
    <Nav />
    <h1>Instrument Rental Management</h1>
    {/* <InventoryCard /> */}
    <Create />
  </>
}

export default App;
