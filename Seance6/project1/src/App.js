import "./App.css";
import State from './Seance7/State';

function App()
{
  // const [state, setState] = useState("SALI7A");

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Monji name={state} name2="monji" /> */}
        {/* <Component1 ahla="bik">Monjisdjgnkdjn</Component1> */}
        {/* <input
          type="text"
          onChange={(event) =>
          {
            setState(event.target.value);
          }}
        /> */}
        {/* <p>{state}</p> */}
        <State />
      </header>
    </div>
  );
}

export default App;
