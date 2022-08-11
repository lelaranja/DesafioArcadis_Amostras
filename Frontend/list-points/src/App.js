import Modal from 'react-modal';
// import api from "./services/api";
import List from "./components/pointList";
import BasicModal from './components/modal';

Modal.setAppElement('#root')

function App() {

  return (
    <div className="App">
      <BasicModal />
      <List />
    </div>
  );
}

export default App;
