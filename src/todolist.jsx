import React from 'react'
import { useState } from 'react'
import Card from './Card';

function Todolist() {

  const [tdname, setTdname] = useState("");
  const [tddescription, setTddescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusfilter, setStatusfilter] = useState("All")
  const [statuschange, Setstatuschange] = useState("Not Completed")

  const addtodo = () => {
    if (tdname.trim() !== "" || tddescription.trim() !== "") {
      const newtodo = {
        name: tdname,
        des: tddescription,
        status: ["Not Completed", "Completed"]
      }

      setTodos([...todos, newtodo])
      setTdname("")
      setTddescription("")
    }
    else {
      alert("Please enter the name and description")
    }
  }

  const edittodo = (index) => {
    const newtodoname = prompt("Edit name:", todos[index].name)
    const newtododes = prompt("Edit descrption:", todos[index].des)
    if (newtodoname !== "" || newtododes !== "") {
      const updatedtodo = [...todos]
      updatedtodo[index] = { name: newtodoname, des: newtododes, status: ["Not Completed", "Completed"] }
      setTodos(updatedtodo);
    }
    else {
      alert("Please enter the name and description")
    }
  }

  const deletetodo = (index) => {
    const updatedtodo = [...todos];
    updatedtodo.splice(index, 1);
    setTodos(updatedtodo)
  }

  const filter = todos.filter((todo) => {
    if (statusfilter === "All") {
      return true;
    } else if (statusfilter === "Completed") {
      if (statuschange === "Completed") {
        return true;
      }
    } else if (statusfilter === "Not Completed") {
      if (statuschange === "Not Completed") {
        return true;
      }
    }
  });


  return (
    <>
      <div className="container">
        <div className="heading"><h4>My todo</h4></div>
        <div className="addbox">
          <input type="name" placeholder='name' id='todoname' value={tdname} onChange={(e) => { setTdname(e.target.value) }} />
          <input type="description" placeholder='description' id='tododescription' value={tddescription} onChange={(e) => { setTddescription(e.target.value) }} />
          <button id='addbtn' onClick={addtodo}>Add Todo</button>
        </div>
        <div className="todolist">
          <h5>Mytodo</h5>
          <div className='flstatus'>
            <h5>Status: </h5>
            <select value={statusfilter} onChange={(e) => setStatusfilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>

        </div>
        <div className='displaytodo'>
          {
            filter.map((sud, index) => {
              return <Card name={sud.name} des={sud.des} status={sud.status} onstatus={statuschange} onstatuschange={Setstatuschange} key={index} edit={() => edittodo(index)} del={() => deletetodo(index)} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Todolist
