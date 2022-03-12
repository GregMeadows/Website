import { Typography } from '@mui/material';
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from 'react';
import ContactForm, {
  FormElements,
  FormState,
} from '../components/ContactForm';

const Contact: FunctionComponent = function Contact() {
  const storedValues: Omit<FormElements, 'website'> = {
    name: sessionStorage.getItem('contact.name') || '',
    email: sessionStorage.getItem('contact.email') || '',
    message: sessionStorage.getItem('contact.message') || '',
  };
  const hasFilledForm =
    storedValues.name && storedValues.email && storedValues.message;

  const [values, setValues] = useState<FormElements>({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [apiErrorText, setApiErrorText] = useState('');
  const [formState, setFormState] = useState<FormState>(
    hasFilledForm ? FormState.sent : FormState.default
  );

  const encode = (data: { [key: string]: string }) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasFilledForm) {
      setFormState(FormState.sending);

      if (values.website !== '') {
        // Honeypot capture
        setApiErrorText('Could not verify request.');
        setFormState(FormState.error);
      } else {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values }),
        })
          .then(() => {
            sessionStorage.setItem('contact.name', values.name);
            sessionStorage.setItem('contact.email', values.email);
            sessionStorage.setItem('contact.message', values.message);
            setFormState(FormState.sent);
          })
          .catch((error) => {
            setApiErrorText(error);
            setFormState(FormState.error);
          });
      }
    }
  }

  function handleChange(
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <section>
      <Typography variant="h1">Say Hello</Typography>
      <Typography>Use the from below to get in touch.</Typography>
      <ContactForm
        formState={formState}
        defaultValues={storedValues}
        errorText={apiErrorText}
        onSubmit={(event) => handleSubmit(event)}
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
};

export default Contact;
