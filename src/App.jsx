
import { useEffect, useState } from 'react';
import './App.css'
import BoxConteiner from './components/BoxConteiner';
import NavBar from './components/Navbar'
import SearchBar from './components/SearchBar';
import BoxList from './components/BoxList';

function App() {
  const [listToDo, setListToDo] = useState([]);
  
  useEffect(() => {
    console.log(listToDo)
  }, [listToDo])

  return (
    <div>
      <NavBar title="Todo List" />
      <div className="containerApp">
        <BoxConteiner>
          <div>
            <SearchBar setlist={setListToDo} list={listToDo}/>
            {
              listToDo.length > 0 && (
                <BoxList list={listToDo}/>
              )
            }
          </div>
        </BoxConteiner>
      </div>
    </div>
  );
}

export default App
