import Button from './Button'
import { FaCaretDown } from "react-icons/fa"
import { FaFilter } from "react-icons/fa"
import React from 'react'



const Menu = ({ allChecked, checkAll, checked, boxSelect, mailbox, setMails }) => {
    const mList = [];
    const checkedupd = checked;

    for (let i = 0; i < mailbox.length; i++){
    mailbox[i].id === boxSelect && mList.push(mailbox[i])
    }
    
    
    function checksHandler() {
        for (let i = 0; i < checked.length; i++) {
            console.log("mlist value", mList[0].subMenuItems[checked[i]-1].id)
            console.log("Check value", checked[i])
            console.log("index value", mList[0].subMenuItems[checked[i]-1].id.indexOf(checked[i]))
            console.log("index2 value", checked[mList[0].subMenuItems[checked[i]-1].id.findIndex(checked)])
            

            mList[0].subMenuItems.splice(mList[0].subMenuItems.id.findIndex(checked), 1)
            // if (mList[0].subMenuItems[checked[i]-1].id === checked[mList[0].subMenuItems[checked[i]-1].id.indexOf(checked[i])]) {
            //     mList[0].subMenuItems.splice(mList[0].subMenuItems[checked[i]-1].id.indexOf(checked[i]), 1)
            // }
            
            
        }
        setMails(mList)
        console.log(mList)
    }
    return (
        <div>
            <div className='searchbar'>
                <input type="text" placeholder='Pesquisar' className='barra_pesquisa' />
                <FaCaretDown cursor='pointer' />
                
            </div>
            <hr className='separator' />
            <div className='acoes'>
                <div className='acoes_btns'>
                    <input type="checkbox" className='acoes_checkbox' checked={allChecked} onChange={checkAll}  />

                    
                    <Button text='Atribuir' btnclass='acoes_btn' />
                    <Button text='Arquivar' btnclass='acoes_btn' onClick={checksHandler} />
                    
                    
                    <Button text='Agendar' btnclass='acoes_btn' />
                </div>
                <div className='filter'><FaFilter size={18} cursor='pointer' /></div>
            </div>
        </div>
    )
}

export default Menu
