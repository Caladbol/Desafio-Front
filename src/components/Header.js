import PropTypes from 'prop-types'
import Button from './Button'
import { FaCaretDown } from 'react-icons/fa'
import {FaEllipsisV} from 'react-icons/fa'


const Header = ({ user, logOut, showLogOut, setShowLogOut}) => {


    return (
        <>
            <div className='profile'>
                <div className='profile_btn' onClick={setShowLogOut} onMouseLeave={showLogOut ? setShowLogOut : undefined}>
                    {user}
                    {showLogOut && <div className='dropdown_logout' onClick={logOut} >
                        Logout
                    </div>}
                    <div className='status' >
                        
                    </div>
                </div>


                <div>
                    <Button text='New' icon={<FaCaretDown />} />
                    
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
