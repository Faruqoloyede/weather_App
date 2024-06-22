import React from 'react'
import Search from './components/Search'

const App = () => {
  return (
    <div className='app'>
      <Search />
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60ºF</h1>
          </div>
          <div className="description">
            <p>cloud</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65ºF</p>
          </div>
          <div className="humidity">
            <p>20º</p>
          </div>
          <div className="wind">
            12MPH
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
