import React from 'react'
import { Link } from 'react-router-dom'

export const todoItem = ({todoList, onDelete, onEdit}) => {

  
  
  return (
    <div className="container my-3">
     <div className="row">
      <div className="col">
        <h1>Todo List</h1>
      </div>
      <div className="col text-end">
      <Link to="/add" className="btn btn-success">Add</Link>
      </div>
    </div>
      <table className="table" border="1">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
        {todoList.map((item, index) => (
        <tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td>
              <button type="button" className="btn btn-danger m-2"  onClick={() => onDelete(item)}>Delete</button>
              <Link to={`/edit/${index}`}><button type="button" className="btn btn-primary" >Edit</button></Link>
            </td>
        </tr>
        //    <tr key={todoToList.sno}>
        //     <td>{todoToList.sno}</td>
        //     <td>{todoToList.title}</td>
        //     <td>{todoToList.desc}</td>
        //     <td>
        //       <button type="button" className="btn btn-danger m-2"  onClick={() => onDelete(todos)}>Delete</button>
        //   <button type="button" className="btn btn-primary" >Edit</button>
        //    </td>
        //    </tr>

     ) )}
    </tbody>
  </table>
  </div>
  
  )
}

export default todoItem
