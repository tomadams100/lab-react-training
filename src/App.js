import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

const people = [
  {lastName: "Doe",
  firstName: "John",
  gender: "Male",
  height: "178",
  birth: "1992-07-14",
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {lastName: "Delores",
  firstName: "Obrien",
  gender: "Female",
  height: "172",
  birth: "1988-05-11",
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const cards = [
  {
    type:"Visa",
    number:"0123456789018845",
    expirationMonth:"3",
    expirationYear:"2021",
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white"
  },
  {
    type:"Master Card",
    number:"0123456789010995",
    expirationMonth:"3",
    expirationYear:"2021",
    bank:"N26",
    owner:"Maxence Bouret",
    bgColor:"#eeeeee",
    color:"#222222"
  }
]

const driverCard = [
  {
    name:"Travis Kalanick",
    rating:"4.2",
    img:"https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car:{
      model:"Toyota Corolla Altis",
      licensePlate:"CO42DE"
    }
  },
  {
    name:"Dara Khosrowshahi",
    rating:"4.9",
    img:"https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car:{
      model:"Audi A3",
      licensePlate:"BE33ER"
    }
  }
]

function App() {
  return (
    <div className="App">
    {people.map((person,i)=><IdCard key={i} person={person} />)}
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="en">Tom</Greetings>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    {cards.map((card,i)=><CreditCard key={i} card={card} />)}
    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating>
    {driverCard.map((card,i)=><DriverCard key={i} card={card} />)}
    </div>
  );
}

export default App;
