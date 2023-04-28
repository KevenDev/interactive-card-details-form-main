import Form from "./Form"
import Card from "./Card"
import React, { useState} from 'react';

function App() {
  const [firstName,setFirstName] = useState('XXXXXXXXX')
  const [card, setCard] = useState('0000 0000 0000 0000')

  
  return (
    <>
      <Card name={firstName} card={card}/>
      <Form setName={setFirstName} setCard={setCard}/>
    </>
  )
}




export default App
