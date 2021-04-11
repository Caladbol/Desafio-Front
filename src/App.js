import { useState, useEffect } from 'react'
import Header from './components/Header'
import Accounts from './components/Accounts'
import Menu from './components/Menu'
import Mails from './components/Mails'
import Login from './components/Login'



const App = () => {
  
  const [loggedIn, setLoggedIn] = useState(false)

  const [boxSelect, setBoxSelect] = useState([])

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
      {!loggedIn && 
        <div className='login'>
          <input type="text" placeholder="User" className='login_form' />
          <input type="password" placeholder="Password" className='login_form' />
          <button className='login_btn' onClick={() => setLoggedIn(true)}  >Log In</button>
        </div>
      
      }

      {loggedIn &&
      <>
        {/* Left Panel */}
        <div className='panel panel_A'>
          <Header logOut ={() => setLoggedIn(!loggedIn)} />
          <Accounts accounts={accounts} show={showBoxes} onExpand={() => setShowBoxes(!showBoxes)}  />

        </div>

        {/* Right Panel */}
        <div className='panel panel_B'>
              <Menu />
              <Mails mailbox={ mailbox, boxSelect } />
          </div>
      </>
      }
      </div>
    );
  }

export default App;
