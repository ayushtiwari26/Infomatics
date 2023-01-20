import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import './OpenPositions.css'

const OpenPositions = () => {
  const [id, setId] = useState()
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  const [employeeList, setEmployeeList] =  useState([])

  const addEmployee = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:3003/create', {
      id:id,
      name:name,
      age:age
    }).then(()=>{setEmployeeList([...employeeList, {
      id:id,
      name:name,
      age:age
    }])})
  }

  const getEmployees = (event) => {
    event.preventDefault()
    Axios.get('http://localhost:3003/employees').then((response)=>{setEmployeeList(response.data)})
  }

  return (
    <div>
      <form>
        <input type="number" onChange={(e)=>setId(e.target.value)}/>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <input type="number" onChange={(e)=>setAge(e.target.value)}/>
        <button type='submit' onClick={addEmployee}>submit</button>
      </form>
      <hr/>
      <button onClick={getEmployees}>show employees</button>
      
      {
        employeeList.map((val, key)=>{
          return(
            <div>{val.id +val.name+ val.age}</div>
          )
        })
      }
    </div>
  )
}

export default OpenPositions