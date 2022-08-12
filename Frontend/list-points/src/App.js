import Modal from 'react-modal';
import List from "./components/pointList";

Modal.setAppElement('#root')

function App() {

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
