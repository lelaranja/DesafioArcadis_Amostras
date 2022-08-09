import List from "./components/pointList";
import InputText from "./components/textForm";

function App() {
  return (
    <div className="App">
      <List />
      <InputText label="Data da Coleta" placeholder="Digite a data (DD/MM/AAAA)" />
      <InputText label="Identificação do ponto" placeholder="Digite a identificação do poço" />
      <InputText label="Parâmetro Amostrado" placeholder="Informe o parâmetro" />
      <InputText label="Valor Amostrado" placeholder="Informe o valor amostrado" />
      <InputText label="Unidade" placeholder="Informe a unidade do valor amostrado (ex: mg/l)" />
      <InputText label="Coordenada X" placeholder="Entre com a coordenada X" />
      <InputText label="Coordenada Y" placeholder="Entre com a coordenada Y" />
    </div>
  );
}

export default App;
