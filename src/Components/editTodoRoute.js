import { Route, useParams } from 'react-router-dom';
import EditTodo from './editTodo'


const EditTodoRoute = ({ todos, handleSave}) => {
  let { index } = useParams();
  index = parseInt(index); // Convert index to a number
  const todo = todos[index];
  const navigateToTodoList = () => {
    // Implement navigation logic here
    // For example, you can use window.location or any other navigation method you prefer
    window.location.href = '/';
  };

  return (
    <EditTodo
      editTodo={todo}
      onSave={(editedTodo) => handleSave(index, editedTodo)}
      navigateToTodoList={navigateToTodoList} 
    />
  );
};

export default EditTodoRoute;