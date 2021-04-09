import PropTypes from 'prop-types'
import Button from './Button'
import { FaCaretDown } from 'react-icons/fa'
import {FaEllipsisV} from 'react-icons/fa'


const Header = ({ user }) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <>
            <div className='profile'>
                <div className='profile_btn'>
                    {user}
                    <div className='dropdown'>
                        
                        <div className='dropdown_logout'>
                            <p href="#" className='logout_button'>Logout</p> 
                        </div>
                    </div>
                     
                </div>

                <div>
                    <Button text='New' onClick={onClick} icon={<FaCaretDown />} />
                    
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

Header.defaultProps = {
    user: 'OA',
}

Header.propTypes = {
    user: PropTypes.string.isRequired,
}

export default Header
