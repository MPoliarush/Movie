import React from 'react'
import img from '../images/im.jpeg'

const Cards = (props)=>{
    return (
        <div className='cardsWrapper'>
            {props.list.map(item=>{
                return (
                <div className="card_container">
                    <img src={item.img}/>
                    <p>{item.name}</p>
                    <p>{item.species}</p>
                </div>)
            })}
        </div>
        
    )
}
export default Cards