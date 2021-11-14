import './App.css';
import Listing from './components/Listing';
import data from './data/data.json';

function App() {
  return (
    <div>
      <Listing items={data} />
    </div>
  );
}

export default App;