import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
  // Sample contact data
  const contactList = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      message: 'Looking forward to working with you.',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '987-654-3210',
      message: 'Please get in touch.',
    },
    {
      name: 'Michael Johnson',
      email: 'michael@example.com',
      phone: '555-123-4567',
      message: 'Thanks for the help!',
    },
  ];

  return (
    <div className="container">
      <h2>Contact List</h2>
      <p>Here are our contacts.</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
