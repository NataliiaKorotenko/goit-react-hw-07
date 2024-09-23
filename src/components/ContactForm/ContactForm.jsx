import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from '../ContactForm/ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  username: Yup.string().min(3).max(50).required(),
  number: Yup.number().min(7).required().typeError("Please enter phone-number!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputForm}>
          <label className={css.inputLabel} htmlFor="username">Name</label>
          <Field className={css.inputName} type="text" name="username" id="username" />
          <ErrorMessage className={css.inputMessage} name="username" component="span" />
        </div>
        <div className={css.inputForm}>
          <label className={css.inputLabel} htmlFor="number">Number</label>
          <Field className={css.inputName} type="tel" name="number" id="number" />
          <ErrorMessage className={css.inputMessage} name="number" component="span" />
        </div>
        <button className={css.buttonForm} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
