import { useState } from "react"

// eslint-disable-next-line react/prop-types
function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    // Função para capturar os dados do form
    const handleSubmit = (e) => {
        e.preventDefault();
        //Verificando se existe alguma coisa nos campos
        if(!value || !category) return;

        //adicionar todo
        addTodo(value, category);

        //limpar os campos
        setValue("")
        setCategory("")
    }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={value} 
                placeholder='Digite o titulo' 
                onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Selecione uma categoria</option>
                <option value='Trabalho'>Trabalho</option>
                <option value='Pessoal'>Pessoal</option>
                <option value='Estudos'>Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm