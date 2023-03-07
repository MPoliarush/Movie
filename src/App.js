import React, {useState,useEffect} from 'react'
import img from './images/first.png'

import Card from './components/Card';



function App() {

  const [fetchedData, setFetchedData]=useState([])

  // const listData = [
  //   {
  //     img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name:'Rick Sanchez',
  //     type:'Human'
  //   },
  //   {
  //     img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name:'Rick Sanchez',
  //     type:'Human'
  //   },
  //   {
  //     img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name:'Rick Sanchez',
  //     type:'Human'
  //   },
  //   {
  //     img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name:'Rick Sanchez',
  //     type:'Human'
  //   },
  //   {
  //     img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name:'Rick Sanchez',
  //     type:'Human'
  //   },
  // ]

  async function getItems(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const items = await response.json()
    

    const characters = items.results.map(charactersData=>{
      return {
        img:charactersData.image,
        name:charactersData.name,
        status:charactersData.status,
        species:charactersData.species,
        origin:charactersData.origin.name,
        type:charactersData.type
      }
    })
    console.log(characters)
    setFetchedData(characters)
  }


  useEffect(()=>{
   getItems()
  },[])

  return (
    <div className="App">
      <main>
        <img className='mainIMG' src={img}/>
        <input placeholder='Filter by name...'/>
        <Card list={fetchedData}/>
      </main>
    </div>
  );
}

export default App;
