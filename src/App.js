import React, {useState,useEffect} from 'react'
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
    {
      img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name:'Rick Sanchez',
      type:'Human'
    },
  ]


  useEffect(()=>{
    async function getItems(){
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const items = await response.json()
      console.log(items)
    }
  },[])

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
