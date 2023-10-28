import Card  from "./components/card"


function App() {
  
  const users = [
    {username: "A"},
    {username: "B"},
    {username: "C"},
    {username: "D"},
    {username: "E"},
    {username: "F"},
    {username: "G"},
    {username: "H"},
    {username: "I"},
    {username: "J"},
  ]

  
  
  return (
    <>
       <h1 className='flex item-centre bg-green-400 text-black p-4 rounded-xl mb-4'>ALL PROFILES</h1>
       <Card username="A" />
    </>
  )
}

export default App
