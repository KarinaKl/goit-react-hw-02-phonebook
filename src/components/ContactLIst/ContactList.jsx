import PropTypes from 'prop-types';
import styled from './ContactList.module.css';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styled.list}>
      {contacts.map(contact => {
        return (
          <li className={styled.listItem} key={contact.id}>
            {contact.name}
            <p>{contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Видалити</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
