import React, { useState } from 'react'
import PropTypes from 'prop-types'


import { FaWhatsapp } from 'react-icons/fa'


const Mails = ({ id, name, subject, owner, users, timestamp }) => {
    const [mails, setMails] = useState([
  {
    "id": 11,
    "subMenuItems": [
      {
        "id": "1",
        "name": "Joao Cabral",
        "subject": "Recebeu minha mensagem?",
        "owner": "JC",
        "users": [
          "JC",
          "MN",
          "CC"
        ]
      },
      {
        "id": "2",
        "name": "Maria Nadir",
        "subject": "Bom dia",
        "owner": "MN",
        "users": [
          "MN"
        ]
      },
      {
        "id": "3",
        "name": "Fernando Henrique",
        "subject": "Aguardo retorno",
        "owner": "FH",
        "users": [
          "FH",
          "CV",
          "MC",
          "BB"
        ]
      },
      {
        "id": "4",
        "name": "Carlos Vaz",
        "subject": "Lembrete",
        "owner": "CV",
        "users": [
          "CV",
          "FH"
        ]
      },
      {
        "id": "5",
        "name": "Bruno Baxtos",
        "subject": "Aviso",
        "owner": "BB",
        "users": [
          "BB"
        ]
      },
      {
        "id": "6",
        "name": "Mauro Marins",
        "subject": "Resposta daquela chamada do final de semana",
        "owner": "MM",
        "users": [
          "MM",
          "BB"
        ]
      }
    ]
  },
  {
    "id": 12,
    "subMenuItems": [
      {
        "id": "7",
        "name": "Joao Cunha",
        "subject": "Recebeu a mensagem?",
        "owner": "JC",
        "users": [
          "JC",
          "CC"
        ]
      },
      {
        "id": "8",
        "name": "Gaby Silva",
        "subject": "Boa noite",
        "owner": "GS",
        "users": [
          "GS"
        ]
      }
    ]
  },
  {
    "id": 22,
    "subMenuItems": [
      {
        "id": "9",
        "name": "Miguel Soares",
        "subject": "Proposta?",
        "owner": "MS",
        "users": [
          "MS",
          "MN",
          "CC",
          "MC"
        ]
      }
    ]
  },
  {
    "id": 33,
    "subMenuItems": []
  },
  {
    "id": 34,
    "subMenuItems": [
      {
        "id": "10",
        "name": "Bruna Marquezine",
        "subject": "Contrato",
        "owner": "BM",
        "users": [
          "BM",
          "MN",
          "CC",
          "GL"
        ]
      },
      {
        "id": "11",
        "name": "Pedro Henrique Borges",
        "subject": "RE: Comentarios do contrato",
        "owner": "PH",
        "users": [
          "PH",
          "FB"
        ]
      },
      {
        "id": "12",
        "name": "Gabriela Silva",
        "subject": "Comprovante",
        "owner": "GS",
        "users": [
          "FH",
          "CV"
        ]
      }
    ]
  },
  {
    "id": 35,
    "subMenuItems": []
  }
])


    
    return (
        <div>
            <React.Fragment>
                {mails.map(mailbox => (
                    <React.Fragment key={mailbox.id}>
                        {mailbox.subMenuItems.map((mail) => (
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

                    </React.Fragment>))}
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
