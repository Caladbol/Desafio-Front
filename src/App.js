import { useState, useEffect } from 'react'
import PanelA from './components/PanelA'
import PanelB from './components/PanelB'


function App() {
  useEffect(() => {
    const getAccount = async () => {
      const accountsFromServer = await fetchAccounts()

    }

    getAccount()
  }, [])

  const fetchAccounts = async () => {
      const res = await fetch('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus')
      const data = await res.json()

      console.log(data)
      return data
    }


    return (
      <div className="container">
        <PanelA />
        <PanelB />

      </div>
    );
  }

export default App;
