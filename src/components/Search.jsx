
const Search = ({ getLocation, setLocation, location }) => {



  const getWeather = (e)=>{
    if(e.key === "Enter") {
      getLocation(location);
      setLocation("")
    }
  }
  return (
    <div className='search'>
      <input type="search" placeholder='Enter Location' value={location} onChange={(e)=> setLocation(e.target.value)} onKeyPress={getWeather}/>
    </div>
  )
}

export default Search
