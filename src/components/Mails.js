import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { FaWhatsapp } from 'react-icons/fa'


// Gerador da Lista de mensagens
const Mails = ({ box, mailbox, timestamp, boxSelect, setChecked, checked, allChecked }) => {
  const mList = [];
  const filtered = checked;
  const checkAll = allChecked;
  const displace = [0, 20, 40, 60];

  



  for (let i = 0; i < mailbox.length; i++){
    mailbox[i].id === boxSelect && mList.push(mailbox[i])
  }


  // Gerador mensagens arquivadas
  const [mouseOver, setMouseOver] = useState(false)
  


  return (
    <div>
    
      <React.Fragment>
        {mList.map((mails) => (
          <React.Fragment key={mails.id}>
            {mails.subMenuItems.map((mail) => (
              <div className='message_box' key={mail.id} >
                <div className='sender_pic'
                  onMouseEnter={() => setMouseOver(true)}
                  onMouseLeave={() => setMouseOver(false)} >

                  {filtered.length > 0 ? <input type='checkbox' id="check" className='mail_select' checked={checkAll ? true : undefined} onChange={() => (filtered.indexOf(mail.id) > -1) ? (setChecked(() => filtered.filter(num => num !== mail.id))) : setChecked(() => [...filtered, mail.id])} readOnly /> : mouseOver === true ?
                    <input type='checkbox' id="check" className='mail_select' checked={checkAll ? true : undefined} onChange={() => (filtered.indexOf(mail.id) > -1) ? (setChecked(() => filtered.filter(num => num !== mail.id))) : setChecked(() => [...filtered, mail.id])} readOnly /> : <>{mail.owner}</>
                  }
                  
                </div>
                <div className='name'>
                    {mail.name}
                </div>
                <div className='subject'>
                    {mail.subject}
                </div>
                <div className='mailbox'>
                    <FaWhatsapp />
                  <div>
                    <React.Fragment>
                      {box.map((boxname, boxid) => (
                        <React.Fragment key={boxid} >
                          {boxname.subMenus.map((boxn, boxnId) => (
                            <>{mails.id === boxn.id && <div className='mailbox_name' key={boxnId} >{boxn.name}</div>}</>
                          )
                          )}
                        </React.Fragment>
                      )

                      )}
                    </React.Fragment>
                  </div> 
                </div>
                <div className='timestamp'>
                    {timestamp}
                </div>
                <div className='owners'>
                  <div className='sender_wrap'>
                    {mail.users.map((sender, senderId) => (
                      (sender.length < 5 ? <div key={senderId} style={{zIndex:{senderId}, left:displace[senderId]}}  className='sender sender_pic'>{sender}</div> : <div className='sender sender_pic'>{sender.length}</div>)
                    ))}
                  </div>
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


