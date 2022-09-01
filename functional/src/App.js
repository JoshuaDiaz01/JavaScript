import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Jane" lastName = "Doe" age = {45} hair = "brown"></PersonCard>
      <PersonCard firstName = "Joshua" lastName = "Diaz" age = {22} hair = "brown"></PersonCard>
      <PersonCard firstName = "Natally" lastName = "Diaz" age = {27} hair = "brown"></PersonCard>
      <PersonCard firstName = "Alondra" lastName = "Diaz" age = {26} hair = "brown"></PersonCard>
    </div>
  );
}

export default App;
