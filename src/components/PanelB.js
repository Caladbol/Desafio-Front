import Menu from './Menu'
import Mails from './Mails'

const PanelB = ({mailbox}) => {
    return (
        // console.log(mailbox)
        <div className='panel panel_B'>
            <Menu />
            <Mails mailbox={ mailbox }/>
        </div>
    )
}

export default PanelB
