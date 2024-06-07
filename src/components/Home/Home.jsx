function Home ({allInstruments, handleSelection}) {
    return (<>
      <h1>Our Home Page</h1>
      <ul>
          {allInstruments.map((instrument, i)=> (
            <li key={i} onClick={()=>handleSelection(instrument)}>{instrument.name}</li>  
          ))}
      </ul>
    
    </>)}
  
export default Home;