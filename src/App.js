import { useState } from "react";
import Formulario from "./componentes/Forms/Formulario";
import ExibirTarefa from "./componentes/ExibirTarefa";
import BotaoExcluir from "./componentes/BotaoExcluir";


function App() {
  
  const [tarefas, setTarefas] = useState([])

  const tarefaAdicionada = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa])
  }

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas)
  }

  return (
    <div className="App">
      <Formulario tarefaInformada={novaTarefa => tarefaAdicionada(novaTarefa)} />
      <ExibirTarefa tarefas={tarefas} removerTarefa={removerTarefa} />
    </div>
  );
}

export default App;
