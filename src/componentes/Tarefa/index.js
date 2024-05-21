import BotaoExcluir from '../BotaoExcluir'
import './Tarefa.css'

const Tarefa = ({titulo, descricao, index, removerTarefa}) => {
    
    return(
        <div className='Tarefa'>
            <div className='topo'>
                <h3>{titulo}</h3>
                <BotaoExcluir index={index} removerTarefa={removerTarefa} />
            </div>
            <p>{descricao}</p>
         </div>
    )
}

export default Tarefa