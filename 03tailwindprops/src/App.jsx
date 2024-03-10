import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const someObj= {
    fullName:"Niketan Sinha",
    age: 21
  }

  let newArray=["apple","orange","pineapple"]

  return (
    <>
    <h1 className='bg-green-500 text-black p-6 rounded-2xl'>Hello Tailwind</h1>
    {/* <Card username="ram" obj={someObj} array={newArray}/> */}
    <Card username="Niketan" btnText="Click me" />
   <Card username="Ranjana" btnText="Visit Web"  />
   <Card username="Shweta"/>
    </>
  )
}

export default App
