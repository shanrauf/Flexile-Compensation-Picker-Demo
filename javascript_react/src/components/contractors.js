import React from 'react'

function Contractors(props) {
  return (
    <div>
      <h1>Contractors</h1>
      {props.contractors.map((contractor) => {
        return <div key={contractor.id}>
          <h2>{contractor.full_name}</h2>
        </div>
      })}
    </div>
  )
}

export default Contractors