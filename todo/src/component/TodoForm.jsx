import { useState } from "react"

function TodoForm() {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        //adicionar todo
        
        //limpar os campos
        setValue("")
        setCategory("")
        console.log(value, category)
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

export defaul