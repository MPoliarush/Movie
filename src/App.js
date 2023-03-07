import React from 'react'
import img from './images/first.png'
import icon from './images/Icon.png'

function App() {
  return (
    <div className="App">
      <main>
        <img className='mainIMG' src={img}/>
        <input placeholder='Filter by name...'/>
      </main>
    </div>
  );
}

export default App;
