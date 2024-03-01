import React from 'react'

import { useState } from 'react'

function Card({ name, des, status, edit, del, onstatus, onstatuschange }) {

  const handlestatus=(e)=>{
    onstatuschange(e.target.value);
  }

  return (
    <div className='todocard'>
      <h6>Name: {name}</h6>
      <h6>Description: {des}</h6>
      <div className="filter">
        <h6>Status:</h6>
        <select value={onstatus} className='sellist' onChange={handlestatus} >
          <option className='ntcom' value="Not Completed">{status[0]}</option>
          <option className='com' value="Completed">{status[1]}</option>
        </select>
      </div>
      <div className="footer">
        <button className='editbtn' onClick={edit}>Edit</button>
        <button className='delbtn' onClick={del}>Delete</button>
      </div>
    </div>
  )
}

export default Card
