import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.titulo}</label>
            <input type='text' value={props.valor} onChange={aoDigitado} placeholder={props.placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto