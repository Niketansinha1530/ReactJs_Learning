import{useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-3xl ">
          <button onClick={()=>{setColor("red")}}
          className="outline-none bg-red-500 rounded-xl px-4 py-1 border-none text-white">Red</button>
          <button onClick={()=>{setColor("lightGreen")}}
           className="outline-none bg-green-500 rounded-xl px-4 py-1 text-white">Green</button>
          <button onClick={()=>{setColor("yellow")}}
           className="outline-none bg-yellow-500 rounded-xl px-4 py-1 text-white">Yellow</button>
          <button onClick={()=>{setColor("orange")}}
          className="outline-none bg-orange-500 rounded-xl px-4 py-1 text-white">Orange</button>
          <button onClick={()=>{setColor("pink")}}
          className="outline-none bg-pink-500 rounded-xl px-4 py-1 text-white">Pink</button>
          <button onClick={()=>{setColor("purple")}}
           className="outline-none bg-purple-500 rounded-xl px-4 py-1 text-white">Purple</button>
          <button onClick={()=>{setColor("skyBlue")}}
           className="outline-none bg-blue-500 rounded-xl px-4 py-1 text-white">Blue</button>
          <button onClick={()=>{setColor("white")}}
           className="outline-none bg-slate-300 rounded-xl px-4 py-1 text-black">White</button>
          <button onClick={()=>{setColor("black")}}
          className="outline-none bg-black rounded-xl px-4 py-1 text-white">Black</button>
          <button onClick={()=>{setColor("gray")}}
          className="outline-none bg-gray-600 rounded-xl px-4 py-1 text-white">Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
