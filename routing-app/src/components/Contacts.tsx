import { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}
const data: Contact[] = [
  {
    id: 1,
    name: 'Carlos Santana',
    email: 'carlos.santana@dev.education',
    phone: '415-307-3112'
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@dev.education',
    phone: '223-344-5122'
  },
  {
    id: 3,
    name: 'Alexis Nelson',
    email: 'alexis.nelson@dev.education',
    phone: '664-291-4477'
  }
]
const Contacts: FC = () => {
  const { contactId = 0 } = useParams()
  // For now we are going to add our contacts to o
  // local state, but normally this should come
  // from some service.
  const [contacts, setContacts] = useState<Contact[]>(data)

  let selectedContact: any = false
  if (contactId > 0) {
    selectedContact = contacts.filter(contact => contact.id == contactId)
  }

  const renderSingleContact = ({ name, email, phone }) => (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  )

  const renderContacts = () => (
    <ul>
      {contacts.map((contact: Contact, key) => (
        <li key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  )
  return (
    <div className="Contacts">
      <h1>Contacts</h1>
      {selectedContact ? renderSingleContact(selectedContact[0]) : renderContacts()}
    </div>
  )
}
export default Contacts
