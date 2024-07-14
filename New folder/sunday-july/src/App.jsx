import React from 'react'
import Card from './Card'
import temple from './assets/big.jpg'
import love from './assets/love.jpg'
import tajmahal from "./assets/tajmahal.jpg"

function App() {
  let data = [
    {
      tittle:"tajmahal",
      img:tajmahal,
      description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by th"
    },
    {
      tittle:"periya kovil",
      img:temple,
      description:"'Thanjavur Big Temple') and Peruvudaiyar Kovil, is a Shaivite Hindu temple built in a Chola architectural style located on the south ban"
    },
      {
        tittle:"love",
        img:love,
        description:"Love encompasses a range of strong and positive emotional and mental states, from the most sublime virtue or good habit, the deepest interpersonal affection "
    }
  ]
  return  <>
  {/* <!-- Page Content --> */}
<div className="container">
  <h1 className="my-4">Today News
  </h1>
  <div className="row">
    {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
    }

  </div>
</div>

  </>
}

export default App
