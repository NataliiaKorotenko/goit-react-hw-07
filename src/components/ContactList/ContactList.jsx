import { useDispatch, useSelector } from "react-redux";
import Contact from '../Contact/Contact';
import { selectFilteredContacts, selectLoading, selectError } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import css from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading contacts...</p>;
  }
  
  if (error) {
    return <p>Loading error: {error}</p>;
  }
  
  if (filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }
  
  return (
    <ul className={css.contactCont}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
