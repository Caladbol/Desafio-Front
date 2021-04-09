import {FaWhatsapp} from 'react-icons/fa'


const Mails = () => {
    return (
        <div>
            <div className='message_box'>
                <div className='sender_pic'>
                    OA
                </div>
                <div className='sender_name'>
                    José Ronaldo
                </div>
                <div className='subject'>
                    Boa tarde, como vai você?
                </div>
                <div className='abstract'>

                </div>
                <div className='mailbox'>
                    <FaWhatsapp />
                    <div className='mailbox_name'>Caixa de Entrada</div> 
                </div>
                <div className='timestamp'>
                    Hoje, 12:00
                </div>
                <div className='senders'>
                    test
                </div>
            </div>
        </div>
    )
}

export default Mails
