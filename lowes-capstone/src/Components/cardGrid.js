import React from 'react'
import WorkshopCard from './Card';
import './cardGrid.css'

const CardGrid = () => {
  return (
    <div>
        <h3 className="cardGridTitle">Title</h3>
      <section className="cardGrid">
        <WorkshopCard className="workshopCard"/>
        <WorkshopCard className="workshopCard"/>
        <WorkshopCard className="workshopCard"/>
        <WorkshopCard className="workshopCard"/>
        <WorkshopCard className="workshopCard"/>
    
        

       
      </section>
    </div>
  )
}

export default CardGrid
