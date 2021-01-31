import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName= {"John"} lastName={"Smith"} age={88} color={"Brown"} />
      <PersonCard firstName= {"Millard"} lastName={"Fillmore"} age={50} color={"Brown"} />
      <PersonCard firstName= {"Maria"} lastName={"Smith"} age={62} color={"Brown"} />
    </div>
  );
}

export default App;
