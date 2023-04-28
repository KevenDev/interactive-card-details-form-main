import Form from "./Form"
import Card from "./Card"
import React, { useState} from 'react';

function App() {
  const [firstName,setFirstName] = useState('XXXXXXXXX')
  const [card, setCard] = useState('0000 0000 0000 0000')
  const [cvc, setCvc] = useState('000')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  
  return (
    <>
    <div className="md:flex md:justify-center md:items-center">      
      <Card name={firstName} card={card} cvc={cvc} month={month} year={year} />
      <Form setName={setFirstName} setCard={setCard} setCvc={setCvc} setMonth={setMonth} setYear={setYear} />
    </div>

    </>
  )
}




export default App
