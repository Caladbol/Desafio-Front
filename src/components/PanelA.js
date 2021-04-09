import Header from './Header'
import Accounts from './Accounts'



const PanelA = ({accounts}) => {
    return (
        <div className='panel panel_A'>
            <Header />
            <Accounts accounts={ accounts } />
        </div>
    )
}

export default PanelA
