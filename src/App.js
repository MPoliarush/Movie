import React from 'react'
import img from './images/first.png'

import Card from './components/Card';



function App() {

  const listData = [
    {
      img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name:'Rick Sanchez',
      type:'Human'
    },
    {
      img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name:'Rick Sanchez',
      type:'Human'
    },
    {
      img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name:'Rick Sanchez',
      type:'Human'
    },
    {
      img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name:'Rick Sanchez',
      type:'Human'
    },
  ]

  return (
    <div className="App">
      <main>
        <img className='mainIMG' src={img}/>
        <input placeholder='Filter by name...'/>
        <Card list={listData}/>
      </main>
    </div>
  );
}

export default App;
