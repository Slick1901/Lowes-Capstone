import React from 'react';
import Card from '../Components/Card';
// import logo from '../we-are.jpeg'
import data from '../Components/cardData.json'
import data2 from '../Components/virtualCardData.json'
import VirtualCard from '../Components/VirtualCard';
import './Home.css'
import Footer from '../Components/footer';
import Hero from '../Components/Hero';
import Manny from '../Components/Manny';
import WorkshopInfo from '../Components/WorkshopInfo';

function Home(item) {
  return (
    <div className='page'>
        <Hero />
<WorkshopInfo />
        <div className='hey'>
        <section className='section'>
        <h2>In-Person Workshops</h2>
        <h3>{item.category}</h3>
        <div>
            {/* <Card props = {data} width='100%'/> */}
            <Manny props={data}/>
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
        <section className='section'>
       <h3>Virtual Workshops</h3>
         <div class='cardsWrapper'>
            <Card props = {data} width='100%'/>
        </div>
        </section>

            {/* <VirtualCard /> */}
            </div>

            <Footer />
    </div>
  )
}




// function Home(){
//   return (
//     <div>
//       <Hero />
//       <WorkshopInfo />
//       <div className='hey'>
//       <h2>In-Person Workshops</h2>
//       <section className='section'>
//         <h3>The Basics</h3>
//         <div class='cardsWrapper'>
//             <Card props = {data} width='100%'/>
//         </div>
//         </section>
//         <section className='section'>
        
//         <h3>Kid Friendly Workshops</h3>
//         <div class='cardsWrapper'>
//             <Card props = {data} width='100%'/>
//         </div>
//         </section>
//         <section className='section'>
//         <h3>Handi-capable Workshops</h3>
//         <div class='cardsWrapper'>
//             <Card props = {data} width='100%'/>
//         </div>
//         </section>
//         <section className='section'>
//         <h3>Women Empowerment Workshops</h3>
//         <div class='cardsWrapper'>
//             <Card props = {data} width='100%'/>
//         </div>
//         </section>
//         <h3>Virtual Workshops</h3>
//             <VirtualCard />
//             </div>

//             <Footer />
//     </div>
//   )
// }

export default Home
