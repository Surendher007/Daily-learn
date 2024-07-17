import React from 'react'
import Card from "./Card"
import Surya from "./assets/surya.jpg"
import Simbu from "./assets/simbu.jpg"
import Dhanush from "./assets/dhanush.jpg"

function App() {
  let data = [
    {
      tittle:"Surya",
      image:Surya,
      description:"Saravanan Sivakumar (born 23 July 1975), known by his stage name Suriya, is an Indian actor and film producer who primarily works in Tamil cinema "
    },
    {
      tittle:"Simbu",
      image:Simbu,
      description:"Silambarasan Thesingu Rajendar (born 3 February 1983), popularly known as Simbu or by his initials as STR, is an Indian actor and playback singer"
    },
    {
      tittle:"Dhanush",
      image:Dhanush,
      description:"Venkatesh Prabhu known by his stage name Dhanush, is an Indian film actor, producer, lyricist and playback singer who has worked predominantly in Tamil "
    }
  ]
  return <>
  {/* <!-- Page Content --> */}
<div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
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
