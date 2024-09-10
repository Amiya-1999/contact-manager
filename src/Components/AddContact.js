import React, { useState } from 'react'

function AddContact({addContact}) {

    const [contactData, setContactData] = useState({name: '', email: ''});

    function handleChange(e) {
        if(e.target.name === 'name') {
            setContactData({...contactData, name: e.target.value});
        }
        else {
            setContactData({...contactData, email: e.target.value});
        }
    }

    const handleAdd = () => {
        if(contactData.name === '' || contactData.email === '')
            alert('Please fill all the details');
        else
            addContact(contactData);
        setContactData({name: '', email: ''});
    }

  return (
    <div className='formHeader'>
        <div className='add-contact'>Add Contact</div>
        <form>
            <label>Name:</label><br />
            <input type="text" placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange} /><br />
            <label>Email:</label><br />
            <input type="text" placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange} />
        </form>
        <button onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact