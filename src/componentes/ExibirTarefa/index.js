import Tarefa from '../Tarefa'
import './ExibirTarefa.css'

const ExibirTarefa = ({tarefas, removerTarefa}) => {
    
    return(
        (tarefas.length > 0) ? <section className='exibirTarefa'>
            <div>
              {tarefas.map((tarefa, index) => <Tarefa key={index} index={index} removerTarefa={removerTarefa} titulo={tarefa.titulo} descricao={tarefa.descricao}/> )}
            </div>
        </section> : ''
    )
}

export default ExibirTarefa