import './Tarefa.css'

const Tarefa = ({titulo, descricao}) => {
    
    return(
        <div className='Tarefa'>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
         </div>
    )
}

export default Tarefa