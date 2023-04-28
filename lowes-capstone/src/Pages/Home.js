import React from 'react';
import Card from '../Components/Card';
// import logo from '../we-are.jpeg'
import data from '../Components/cardData.json'
import VirtualCard from '../Components/VirtualCard';
import './Home.css'


function Home() {
  return (
    <div>
      <div>
        <h2>Home Imporvement's Workshops</h2>
        <p>Focusing on empowering communities across America, we offer workshops to make everyone feel included! Choose between several of our free virtual and in-person workshops.</p>
      </div>
        <section className='section'>
        <h2>In-Person Workshops</h2>
        <h3>Kid Friendly Workshops</h3>
        <div class='cardsWrapper'>
            <Card props = {data} width='100%'/>
        </div>
        </section>
        <section className='section'>
        <h3>Handi-capable Workshops</h3>
        <div class='cardsWrapper'>
            <Card props = {data} width='100%'/>
        </div>
        </section>
        <section className='section'>
        <h3>Women Empowerment Workshops</h3>
        <div class='cardsWrapper'>
            <Card props = {data} width='100%'/>
        </div>
        </section>
        <h3>Virtual Workshops</h3>
            <VirtualCard />

            
    </div>
  )
}

// function Home(){
//   return (
//     <div>
//       <div>
//         <h2>Home Imporvement's Workshops</h2>
//         <p>Focusing on empowering communities across America, we offer workshops to make everyone feel included! Choose between several of our free virtual and in-person workshops.</p>
//       </div>
//         <section className='section'>
//         <h2>In-Person Workshops</h2>
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

//             <Footer />
//     </div>
//   )
// }

export default Home
