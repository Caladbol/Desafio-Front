import { useState, useEffect } from 'react'
import PanelA from './components/PanelA'
import PanelB from './components/PanelB'


const App = () => {
  const [accounts, setAccount] = useState([])

  const [mailbox, setMails] = useState([])

  useEffect(() => {
    const getAccounts = async () => {
      const accountsFromApi = await fetchAccounts()
      setAccount(accountsFromApi)
    }
    const getMails = async () => {
      const mailsFromApi = await fetchMails()
      setMails(mailsFromApi)
    }

    getAccounts()
    getMails()
    }, [])
  
  const fetchAccounts = async () => {
    const res = await fetch('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus')
    const dataAcc = await res.json()
    
    console.log(dataAcc)

    return dataAcc
  }

  const fetchMails = async () => {
    const res = await fetch('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items/')
    const dataMail = await res.json()

    console.log(dataMail)
    return dataMail
  }


  return (
      <div className="container">
        <PanelA accounts={ accounts } />
        <PanelB mailbox={ mailbox } />

      </div>
    );
  }

export default App;
