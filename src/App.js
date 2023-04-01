import Texto from "./components/text/text.js";
import Button from "./components/button/button.js"
import './App.css'

function App() {
  return (
    <div className="container">
      <Texto color="white" transform="uppercase">
        Este é o parágrafo colorido e maiúsculo da Quest de React básico do Curso DevQuest dos gêmeos Ricardo Dias (Cadu) e Roberto Dias (Beto) do devemdobro.
      </Texto>
      <Button label="Mostrar label"/>
    </div>
  )
}

export default App;
