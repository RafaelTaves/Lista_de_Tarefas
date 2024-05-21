import './BotaoExcluir.css'
import { FaTrash } from 'react-icons/fa';

const BotaoExcluir = ({index, removerTarefa}) => {
    
    return(
        <div className='BotaoExcluir'>
            <button onClick={() => removerTarefa(index)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default BotaoExcluir