import { useState } from 'react'
import Nav from './components/Nav/Nav.jsx'
import InventoryCard from './components/Home/InventoryCard/InventoryCard.jsx'
import './App.css'
import Create from './components/AddInstruments/AddInstruments.jsx'
import EditInstrument from './components/EditInstrument/EditInstrument.jsx'

function App() {
  
  return <>
    <Nav />
    <h1>Instrument Rental Management</h1>
    {/* <InventoryCard /> */}
    {/* <Create /> */}
    <EditInstrument />
  </>
}


export default App
