import { useState, useEffect } from 'react'
import Header from './components/Header'
import Accounts from './components/Accounts'
import Menu from './components/Menu'
import Mails from './components/Mails'
import Login from './components/Login'



const App = () => {
  
  const [loggedIn, setLoggedIn] = useState(false)

  const [boxSelect, setBoxSelect] = useState([])

  const [showBoxes, setShowBoxes] = useState([])

  const [checked, setChecked] = useState([])

  const [allChecked, setAllChecked] = useState(false)



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
    
    // console.log(dataAcc)

    return dataAcc
  }

  const fetchMails = async () => {
    const res = await fetch('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items/')
    const dataMail = await res.json()

    // console.log(dataMail)
    return dataMail
  }
// =========================================

  return (
    <div className="container">

      {/* Login screen */}
      {!loggedIn && <Login logIn={() => setLoggedIn(true)} />}
      
      {/* Main screen */}
      {loggedIn &&
      <>
        {/* Left Panel */}
        <div className='panel panel_A'>
          <Header logOut ={() => setLoggedIn(!loggedIn)} />
          <Accounts accounts={accounts} show={showBoxes} onExpand={setShowBoxes} boxSelect={boxSelect} setBox={setBoxSelect} />

        </div>

        {/* Right Panel */}
        <div className='panel panel_B'>
          <Menu allChecked={allChecked} checkAll={() => setAllChecked(!allChecked)} checked={checked} setChecked={setChecked} mailbox={mailbox} setMails={setMails} boxSelect={boxSelect} />
          <p>checkd is: { checked }</p>
          <Mails box={ accounts } mailbox={mailbox} boxSelect={boxSelect} checked={checked} setChecked={setChecked}/>
          
          </div>
      </>
      }
      </div>
    );
  }

export default App;
