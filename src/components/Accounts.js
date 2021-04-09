import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const Accounts = ({ id, name, accounts, show, onExpand }) => {

    return (
        <div className='accounts'>
            <React.Fragment>
                {accounts.map((account => (
                    <div className='account' key={account.id}>
                        <p className='account_name' onClick={onExpand}><FaCaretDown style={{ cursor: 'pointer' }} />{account.name}</p>
                        {show && <React.Fragment>
                            {account.subMenus.map((box => (
                                <div className='box' key={box.id}>
                                    {box.name}
                                </div>
                            )))}
                        </React.Fragment>}
                    </div>

                )))}
            </React.Fragment>
            
        </div>
    )
}

export default Accounts
