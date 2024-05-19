import { useState } from "react";
import Formulario from "./componentes/Formulario";
import ExibirTarefa from "./componentes/ExibirTarefa";


function App() {
  
  const [tarefas, setTarefas] = useState([])

  const tarefaAdicionada = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa])
  }

  return (
    <div className="App">
      <Formulario tarefaInformada={novaTarefa => tarefaAdicionada(novaTarefa)} />

      <ExibirTarefa tarefas={tarefas} />
    </div>
  );
}

export default App;
