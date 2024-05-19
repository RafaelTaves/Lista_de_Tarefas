import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.tarefaInformada({
            titulo,
            descricao
        })
        console.log(titulo, descricao)
        setTitulo('')
        setDescricao('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <CampoTexto
                    titulo='Titulo'
                    placeholderModificada='Digite o titulo'
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoTexto
                    titulo='Descrição'
                    placeholderModificada='Digite detalhes de sua tarefa'
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <Botao>
                    Adicionar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
