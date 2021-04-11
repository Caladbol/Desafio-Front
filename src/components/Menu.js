import Button from './Button'
import { FaCaretDown } from "react-icons/fa"
import { FaFilter } from "react-icons/fa"



const Menu = ({ allChecked, checkAll }) => {
    return (
        <div>
            <div className='searchbar'>
                <input type="text" placeholder='Pesquisar' className='barra_pesquisa' />
                <FaCaretDown cursor='pointer' />
                
            </div>
            <hr className='separator' />
            <div className='acoes'>
                <div className='acoes_btns'>
                    <input type="checkbox" className='acoes_checkbox' checked={allChecked} onChange={checkAll} />
                    
                    <Button text='Atribuir' btnclass='acoes_btn' />
                    <Button text='Arquivar' btnclass='acoes_btn' />
                    <Button text='Agendar' btnclass='acoes_btn' />
                </div>
                <div className='filter'><FaFilter size={18} cursor='pointer' /></div>
            </div>
        </div>
    )
}

export default Menu
