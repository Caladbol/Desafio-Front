import Button from './Button'
import { FaCaretDown } from "react-icons/fa"
import { FaFilter } from "react-icons/fa"
import React from 'react'



const Menu = ({ allChecked, checkAll, checked, setChecked, boxSelect, mailbox, setMails }) => {
    const mList = [];
    const allCheckedUpd = allChecked;
    const checkedUpd = checked;

    function messageList() {
        for (let i = 0; i < mailbox.length; i++){
            mailbox[i].id === boxSelect && mList.push(mailbox[i])
            }
    }
    messageList();
    
    // function refreshMails() {
    //     if (boxChanged !== boxSelect) {
    //         messageList();
    //     } else if (mList.subMenuItems === undefined) {
    //         messageList();
    //     }
    // }
    
    function checksHandler() {
        var i = 0;
        while (i < mList[0].subMenuItems.length) {
            if (checkedUpd.indexOf(mList[0].subMenuItems[0].id) > -1) {
                mList[0].subMenuItems.splice(i, 1);
            } else { i++; }
        }
        setMails(mList);


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
                    <input type="checkbox" className='acoes_checkbox' checked={allCheckedUpd} onClick={checkAll} onChange={checkedUpd.length > 0 ? (allCheckedUpd ? setChecked : undefined) : undefined} readOnly />

                    
                    <Button text='Atribuir' btnclass='acoes_btn' />
                    <Button text='Arquivar' btnclass='acoes_btn' onClick={() => { checksHandler(); setChecked()}}  />
                    
                    
                    <Button text='Agendar' btnclass='acoes_btn' />
                </div>
                <div className='filter'><FaFilter size={18} cursor='pointer' /></div>
            </div>
        </div>
    )
}

export default Menu
