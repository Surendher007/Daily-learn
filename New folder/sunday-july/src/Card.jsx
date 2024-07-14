import React from 'react'

function Card(props) {
  return <>
  <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={props.data.img} alt="" />
        <div className="card-body">
          <h4 className="card-title">
            <a >{props.data.tittle}</a>
          </h4>
          <p className="card-text">{props.data.description}</p>
        </div>
      </div>
    </div>
  </>
}

export default Card
