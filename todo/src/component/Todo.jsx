
// eslint-disable-next-line react/prop-types
function Todo({ texto, categoria }) {
  return (
        <div className="todo">
          <div className="content">
            <p>{texto}</p>
            <p className='category'>({categoria})</p>
          </div>
          <div>
            <button className="complete">Completar</button>
            <button className="remove">x</button>
          </div>
        </div>
  )
}

export default Todo