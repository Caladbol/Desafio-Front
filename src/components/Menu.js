import { FaCaretDown } from "react-icons/fa"
import { FaFilter } from "react-icons/fa"



const Menu = () => {
    return (
        <div>
            <div className='searchbar'>
                <input type="text" placeholder='Pesquisar' className='barra_pesquisa' />
                <FaCaretDown cursor='pointer' />
                
            </div>
            <hr className='separator' />
            <div className='acoes'>
                <div className='acoes_btns'>
                    <div className='acoes_checkbox'><input type="checkbox"/></div>
                    <div className='acoes_btn'>Atribuir</div>
                    <div className='acoes_btn'>Arquivar</div>
                    <div className='acoes_btn'>Agendar</div>
                </div>
                <div className='filter'><FaFilter size={18} cursor='pointer' /></div>
            </div>
        </div>
    )
}

export default Menu
