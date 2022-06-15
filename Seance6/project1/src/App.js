import { createContext, useState } from 'react';
import "./App.css";
import MainRouter from './Seance8/MainRouter';

function App()
{
  const [user, setuser] = useState("SALI7A");
  const [first, setfirst] = useState([])
  const Usercontext = createContext({});

  return (
    <Usercontext.Provider value={{ user, setuser }}>
      <div className="App">
        <header className="App-header">
          {/* <TodoContext.Provider value={{ first, setfirst }} > */}
          <MainRouter />
          {/* </TodoContext.Provider> */}

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
          {/* <State /> */}
        </header>
      </div>
    </Usercontext.Provider>
  );
}

export default App;
