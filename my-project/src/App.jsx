import Form from "./Form"
import Card from "./Card"
import React, { useState, useEffect } from 'react';

function App() {
  const [firstName,setFirstName] = useState('Keven Teles')
  const [firstCard,setCard] = useState('0000 0000 0000 0000')

  
  return (
    <>
    <div className="container">
      <Card setName={firstName} setCard={firstCard}/>
    </div>
    <div>
      <Form catchName={e => setFirstName(e)} catchCard={e=> setCard(e)}/>
    </div>
    </>
  )
}




export default App
