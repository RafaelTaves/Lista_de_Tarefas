import Tarefa from '../Tarefa'
import './ExibirTarefa.css'

const ExibirTarefa = ({tarefas}) => {
    
    return(
        (tarefas.length > 0) ? <section className='exibirTarefa'>
            <div>
              {tarefas.map(tarefa => <Tarefa key={tarefa.titulo} titulo={tarefa.titulo} descricao={tarefa.descricao}/> )}
            </div>
        </section> : ''
    )
}

export default ExibirTarefa