import { FaUser, FaPhoneVolume } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from '../Contact/Contact.module.css';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <div className={css.contactWrapper}>
        <div className={css.contactUser}>
          <FaUser className={css.icon} size="16" />
          <p className={css.contactName}>{name}</p>
        </div>
        <div className={css.contactUser}> 
          <FaPhoneVolume className={css.icon} size="16" />
          <p className={css.contactNumber}>{number}</p>
        </div>
      </div>
      <button 
        type="button"
        onClick={() => dispatch(deleteContact(id))} 
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
 