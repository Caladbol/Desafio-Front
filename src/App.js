import { useState, useEffect } from 'react'
import Header from './components/Header'
import Accounts from './components/Accounts'
import Menu from './components/Menu'
import Mails from './components/Mails'



const App = () => {
  const [showBoxes, setShowBoxes] = useState(false)


  // Get data from external API
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
// =========================================

  return (
    <div className="container">
      {/* Left Panel */}
      <div className='panel panel_A'>
        <Header />
        <Accounts accounts={accounts} show={showBoxes} onExpand={() => setShowBoxes(!showBoxes)} />

      </div>

      {/* Right Panel */}
      <div className='panel panel_B'>
            <Menu />
            <Mails mailbox={ mailbox }/>
        </div>

      </div>
    );
  }

export default App;
