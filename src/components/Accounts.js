import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const Accounts = ({ id, name, accounts }) => {

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
