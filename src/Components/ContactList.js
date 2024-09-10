import DeleteIcon from '@mui/icons-material/Delete';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function ContactList(props) {
    const {contacts, removeContact} = props;

    const contactList = contacts.map((contact) => {
        return (
            <div className="contacts">
                <span><PersonPinIcon /></span>
                <div style={{position: 'absolute', left: '3.5rem'}}>{contact.name}</div>
                <div style={{fontSize: 'small'}}>{contact.email}</div>
                <span onClick={() => removeContact(contact.id)}><DeleteIcon /></span>
            </div>
        )
    })
  return (
    <>
        {contacts.length >= 1 && <div className='ContactHeader'>Contact List</div>}
        <div>{contactList}</div>
    </>
  )
}

export default ContactList