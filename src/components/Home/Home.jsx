import Nav from './components/Nav/Nav.jsx'
import InventoryCard from './components/InventoryCard/InventoryCard.jsx'
import './App.css'



function Home() {
    return <>
      <Nav />
      <h1>Instrument Rental Management</h1>
      <InventoryCard />
    </>
  }
  
  export default Home