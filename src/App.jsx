import { useState } from 'react'
import Nav from './components/Nav/Nav.jsx'
import InventoryCard from './components/Home/InventoryCard/InventoryCard.jsx'
import './App.css'
import Create from './components/AddInstruments/AddInstruments.jsx'




function App() {
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
    <InventoryCard />
    {/* <Create /> */}
  </>
}


export default App
