import React, {useState,useEffect} from 'react'
import img from './images/first.png'

import Card from './components/Card';



function App() {

  const [fetchedData, setFetchedData]=useState([])
  const [filtered, setFiltered] =useState([])
  const [inputData,setInputData] = useState(' ')

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



  const inputHandler = (event)=>{
    setInputData(event.target.value)
  }



  async function getItems(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const items = await response.json()
    
    let characters = items.results.map(charactersData=>{
      return {
        img:charactersData.image,
        name:charactersData.name,
        status:charactersData.status,
        species:charactersData.species,
        origin:charactersData.origin.name,
        type:charactersData.type
      }
    })
    characters = characters.sort((a,b)=>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    console.log(characters)

    setFetchedData(characters)
    setFiltered(characters)
  }


  useEffect(()=>{
   getItems()
  },[])


  useEffect(()=>{
      let filteredNames;
      filteredNames = filtered.filter(item=>{
        return item.name.includes(inputData)
      })

      setFetchedData(filteredNames)
   
  },[inputData])

  

  return (
    <div className="App">
      <main>
        <img className='mainIMG' src={img} />
        <input onChange={inputHandler} placeholder='Filter by name...' />
        <Card list={fetchedData} onClick/>
      </main>
    </div>
  );
}

export default App;
