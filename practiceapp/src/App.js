import './App.css';
import '../src/Styles.css';
import ButtonC from './ButtonC';
import WithCounter from './Counter';

const EComp=WithCounter(ButtonC);
function App() {
  return (
    <div className='center-screen'>
      <EComp />
    </div>

  );
}

export default App;
