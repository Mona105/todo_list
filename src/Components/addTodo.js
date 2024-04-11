import React, { useState} from 'react'


export const AddTodo = ({ addTodo, navigateToTodoList}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {

        e.preventDefault();
        if (title.trim() !== '' && desc.trim() !== '') {
            addTodo({
              title: title,
              desc: desc
            });
            navigateToTodoList();
          }
          // Clear form fields
          setTitle('');
          setDesc('');
          // Navigate to the todo list page
          
    };

    return (
        <>
            <h2 className="text-center my-3">Add Todo Item</h2>
            <form className="container" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="title"name="title" onChange={(e) => setTitle(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" name="desc" onChange={(e) => setDesc(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </>
    )
}
export default AddTodo