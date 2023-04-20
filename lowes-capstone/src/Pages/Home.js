import React from 'react';
// import CardGrid from '../Components/cardGrid';
import Card from '../Components/Card';
// import logo from '../we-are.jpeg'
import data from '../Components/cardData.json'
const Home = () => {
// const dataArray = [
//     {
//         "id": 1,
//         "image": "../we-are.jpeg",
//         "title": "hello",
//         "text": "djbbdsjbkjc"
//     },
//     {
//         "id": 2,
//         "image": "../we-are.jpeg",
//         "title": "hello",
//         "text": "djbbdsjbkjc"
//     }]



  return (
    <div>
      {/* <CardGrid> */}
        <Card props = {data}/>
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      {/* </CardGrid> */}
    </div>
  )
}

export default Home
