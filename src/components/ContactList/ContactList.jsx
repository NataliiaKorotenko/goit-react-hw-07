import { useDispatch, useSelector } from "react-redux";
import Contact from '../Contact/Contact';
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { filterValue } from "../../redux/filtersSlice";
import css from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterValue);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <p>Контакти не знайдені</p>;
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
