import React from 'react';
import Card from '../Components/Card';
// import logo from '../we-are.jpeg'
import data from '../Components/cardData.json'
import classes from './Home.module.css'
import Footer from '../Components/footer';
import Hero from '../Components/Hero';
import DashboardWorkshopCard from '../Components/DashboardWorkshopCard';
import WorkshopInfo from '../Components/WorkshopInfo';
import Nav from '../Components/Nav';

function DashboardHome(item) {
  return (
    <div className='homeContainer'>
      <Nav />
        <Hero />
<WorkshopInfo />
        <div className={classes.workshopContainer}>
        <section className={classes.section}>
        <h2 className='workshopCategory'>In-Person Workshops</h2>
        <h3>{item.category}</h3>
        <div>
            {/* <Card props = {data} width='100%'/> */}
            <DashboardWorkshopCard props={data}/>
        </div>
        </section>
        {/* <section className='section'>
        <h3>Handi-capable Workshops</h3>
        <div class='cardsWrapper'>
            <Manny props={data} workshopDetail="Is"/>

        </div>
        </section>
        <section className='section'>
        <h3>Women Empowerment Workshops</h3>
        <div class='cardsWrapper'>
            <Manny props={data} workshopDetail="Deborah"/>
        </div>
        </section> */}
        {/* <h3>Virtual Workshops</h3> */}
        <section className={classes.section}>
       <h2 className='workshopCategory'>Virtual Workshops</h2>
         <div className={classes.cardsWrapper}>
            <Card props = {data} width='100%'/>
        </div>
        </section>
            </div>

            <Footer />
    </div>
  )
}

export default DashboardHome