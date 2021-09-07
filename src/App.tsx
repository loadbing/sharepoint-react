import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { sp } from "@pnp/sp/presets/all";

function App() {
  const [items, setItems] = useState<any[]>([]);

  const getListItems = useCallback(async () => {
    try {
      const items: any[] = await sp.web.lists.getByTitle('BaseDatosPersonas').select('Title, ID').items.getAll();

      setItems(items);
    } catch (error) {
      console.log(error);
    }

  }, [])

  const insertItem = async () => {
    try {
      await sp.web.lists.getByTitle("BaseDatosPersonas").items.add({
        Title: 'Valor ' + Math.random().toFixed(1)
      });

      getListItems();
    } catch (error) {
      console.log(error);
    }
  }

  const deleteItem = async (id: any) => {
    try {
      await sp.web.lists.getByTitle("BaseDatosPersonas").items.getById(id).delete();

      getListItems();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListItems();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map(x => <li>{x.Title} <a onClick={() => deleteItem(x.ID)}
            className="App-link">Eliminar</a></li>)}
        </ul>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
          onClick={() => insertItem()}
        >
          Insertar
        </a>
      </header>
    </div>
  );
}

export default App;