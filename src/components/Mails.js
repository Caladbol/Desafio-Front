import React from 'react'
import PropTypes from 'prop-types'


import { FaWhatsapp } from 'react-icons/fa'


const Mails = ({ mailbox, id, name, subject, owner, users, timestamp }) => {
  return (
    // console.log(mailbox)
    <div>
      <React.Fragment>
        {mailbox.map((mails) => (
          <React.Fragment key={mails.id}>
            {mails.subMenuItems.map((mail) => (
              <div className='message_box' key={mail.id}>
                <div className='sender_pic'>
                    {mail.id}
                </div>
                <div className='name'>
                    {mail.name}
                </div>
                <div className='subject'>
                    {mail.subject}
                </div>
                <div className='mailbox'>
                    <FaWhatsapp />
                    <div className='mailbox_name'>Caixa de Entrada</div> 
                </div>
                <div className='timestamp'>
                    {timestamp}
                </div>
                <div className='owners'>
                    {mail.users}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    </div>
  )
}

Mails.defaultProps = {
    owner: 'OA',
    name: 'José Ronaldo',
    subject: 'Boa tarde, como vai você?',
    users: 'OA',
    timestamp: 'Hoje, 12:00'
}

Mails.propTypes = {
    owner: PropTypes.string,
    name: PropTypes.string,
    subject: PropTypes.string,
    users: PropTypes.string,
    timestamp: PropTypes.string,
}

export default Mails


