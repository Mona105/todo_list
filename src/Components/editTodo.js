import React , {useState, useEffect}from 'react'


export const EditTodo = ({editTodo, onSave, navigateToTodoList}) => {
    
    const [editedTodo, setEditedTodo] = useState(editTodo);

    useEffect(() => {
        setEditedTodo(editTodo);
      }, [editTodo]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTodo({
          ...editedTodo,
          [name]: value,
        });
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedTodo);
        navigateToTodoList();
      };
    
  return (
    <>
            <h2 className="text-center my-3">Update Todo Item</h2>
            <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"
                     name="title"
                     value={editedTodo.title}
                     onChange={handleChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" 
                   name="desc"
                 value={editedTodo.desc}
                  onChange={handleChange}/>
                </div>

                <button type="submit" className="btn btn-success">Edit</button>
            </form>
        </>
  )
}
export default EditTodo
