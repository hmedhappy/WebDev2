import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getPosts } from "./Seance10/Services/posts";
import MainRouter from "./Seance9/MainRouter";

export const TodoContext = createContext({});
function App() {
  const [user, setuser] = useState("SALI7A");
  const [list, setlist] = useState([]);
  const Usercontext = createContext({});

  useEffect(() => {
    getPosts().then((posts) => {
      setlist(posts);
    });
  }, []);

  return (
    <Usercontext.Provider value={{ user, setuser }}>
      <TodoContext.Provider value={{ list, setlist }}>
        <div className="App">
          <MainRouter />
        </div>
      </TodoContext.Provider>
    </Usercontext.Provider>
  );
}

export default App;
