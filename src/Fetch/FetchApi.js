import React, { useState, useEffect } from 'react'

export const FetchApi = () => {
  const [text, textUpdate] = useState('')
  const [list, listUpdate] = useState([])
  const [done, doneUpdate] = useState([])
  const [Api, apiUpdate] = useState([])

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( res => res.json())
    .then( data => {
      apiUpdate(data)
    })
  }, [])
  return (
    <div>
      <table>
        <tr style={{textAlign:'left'}}>
          {/* <th>Confirmed</th>
          <th>Hospitalized</th>
          <th>Deaths</th>
          <th>NewConfirmed</th>
          <th>NewRecovered</th>
          <th>NewHospitalized</th>
          <th>NewDeaths</th>
          <th>UpdateDate</th>
          <th>Source</th>
          <th>DevBy</th>
          <th>SeverBy</th> */}
          <th>UserID</th>
          <th>id</th>
          <th>title</th>
        </tr>
        {Api.map((obj => {
          return (<tr>
            <td>{obj.userId}</td>
            <td>{obj.id}</td>
            <td>{obj.title}</td>
            <td>{obj.completed}</td>
          </tr>)
        }))}
      </table>
    </div>
  )
}