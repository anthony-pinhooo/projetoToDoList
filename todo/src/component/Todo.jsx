
// eslint-disable-next-line react/prop-types
const Todo = ({ texto, categoria, feito, id, removeTodo, completeTodo}) => {

  return (
        <div 
          className="todo"
          style={{textDecoration: feito ? "line-through" : ""}}
        >
          <div className="content">
            <p>{texto}</p>
            <p className='category'>({categoria})</p>
          </div>
          <div>
            <button className="complete" onClick={() => completeTodo(id)}>Completar</button>
            <button className="remove" onClick={() => removeTodo(id)}>x</button>
          </div>
        </div>
  )
}

export default Todo