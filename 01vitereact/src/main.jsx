import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
       <>
       <h1>Hello world !</h1>
        <h2>hello !</h2>
       </>
    )
} 
//myApp is just a function not a jsx (javaScript xml)
/*
const ReactElement ={
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}
*/

const anotherElement = (
  <a href="https://google.com" target="_blank">visit Google</a>

)
const anotherUser='NaveenSinha@2600'
  const reactElement =React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser
  )

ReactDOM.createRoot(document.getElementById('root')).render(

//    <App />
//   <MyApp />
//   anotherElement
reactElement
//   ReactElement //it  not working
//  App()
//always use pascale case to write functions // MyApp() work properly

// ya render alag tarika se kam karta hoga jaise humnay apnay reactElement kay liya custom render banya tha ya kuch or karta  hoga.
)
