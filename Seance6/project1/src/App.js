import { createContext, useState } from "react";
import "./App.css";
import MainRouter from "./Seance9/MainRouter";

const posts = [
  {
    name: "Sidi Dewed",
    contenu: "Ay 7aja",
    photoPost: "https://picsum.photos/200/300",
    photoProfile: "https://picsum.photos/200/300",
  },
  {
    name: "Selim ",
    contenu: "Chagra",
    photoPost: "https://picsum.photos/200/300",
    photoProfile: "https://picsum.photos/200/300",
  },
];

export const TodoContext = createContext({});
function App() {
  const [user, setuser] = useState("SALI7A");
  const [list, setlist] = useState(posts);
  const Usercontext = createContext({});

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
