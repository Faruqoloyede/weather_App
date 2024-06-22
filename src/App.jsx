import { useState, useEffect} from 'react'
import Search from './components/Search'


const App = () => {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");

  const getLocation = async () => {
    if (!location) {
      return; // Exit early if location is empty
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4d0f9f3753667c12eae30730f450e6a5`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error state (e.g., show error message to user)
    }
  };
  

  useEffect(()=>{
    getLocation("nigeria");
  }, [location]);

 
  return (
    <div className='app'>
        <Search  location ={location} setLocation={setLocation} getLocation={getLocation} />
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>{weather.name}</p>
          </div>
          <div className="temp">
            {weather.main ? <h1>{weather.main.temp.toFixed()}ºF</h1> : null}
          </div>
          <div className="description">
            {weather.weather ? <p>{weather.weather[0].main}</p> : null}
            
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {weather.main ? <p>{weather.main.feels_like.toFixed()}ºF</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weather.main ? <p>{weather.main.humidity.toFixed()}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {weather.wind ? <p>{weather.wind.speed.toFixed()}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
