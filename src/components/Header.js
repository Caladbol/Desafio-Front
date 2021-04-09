import {FaCaretDown} from 'react-icons/fa'
import {FaEllipsisV} from 'react-icons/fa'


const Header = () => {
    return (
        <>
            <div className='profile'>
                <div className='profile_btn'>OA</div>
                <div className='new_btn'>
                    New 
                    <FaCaretDown />
                </div>
            </div>
            <hr className='separator' />
            <div className='favoritos'>
                <p className='favoritos_ellipsis'>Favoritos <FaEllipsisV cursor='pointer' /></p>
                
                <p>30</p>
            </div>
        </>
    )
}

export default Header
