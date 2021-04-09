import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const Accounts = ({ id, name }) => {
    const [accounts, setAccount] = useState([
  {
    "id": 1,
    "name": "Conta 1",
    "subMenus": [
      {
        "id": 11,
        "name": "Caixa de entrada"
      },
      {
        "id": 12,
        "name": "Caixa de saída"
      }
    ]
  },
  {
    "id": 2,
    "name": "Conta 2",
    "subMenus": [
      {
        "id": 22,
        "name": "Inbox"
      }
    ]
  },
  {
    "id": 3,
    "name": "Conta 3",
    "subMenus": [
      {
        "id": 33,
        "name": "Entrada"
      },
      {
        "id": 34,
        "name": "Vip"
      },
      {
        "id": 35,
        "name": "Lixo"
      }
    ]
  }
])

    return (
        <div className='accounts'>
            <React.Fragment>
                {accounts.map((account => (
                    <div className='account' key={account.id}>
                        <FaCaretDown />
                        {account.name}
                        <React.Fragment>
                            {account.subMenus.map((box => (
                                <div key={box.id} className='box'>
                                    {box.name}
                                </div>
                                    )
                                    ))}
                        </React.Fragment>
                    </div>
                )))}
            </React.Fragment>
            
        </div>
    )
}

export default Accounts
