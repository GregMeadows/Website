import { Typography } from '@mui/material';
import React, {
  FunctionComponent,
  FormEvent,
  useState,
  ChangeEvent,
} from 'react';
import ContactForm, { FormState } from '../components/ContactForm';

interface FormElements {
  name: string;
  email: string;
  message: string;
  website: string; // Honeypot
}

const Contact: FunctionComponent = function Contact() {
  const hasFilledForm = sessionStorage.getItem('contacted') === 'true';

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

  const successMessage = (
    <Typography variant="body1">
      Thanks for the message! I&apos;ll get back to you as soon as I can.
    </Typography>
  );

  let mainText;
  if (formState === FormState.default) {
    mainText = (
      <Typography variant="body1">
        Use the from to send me a message. I&apos;ll try to get back to you as
        quick as possible.
      </Typography>
    );
  } else if (formState === FormState.error) {
    mainText = (
      <>
        <Typography variant="body1">
          Sorry, there was an issue while sending your message.
        </Typography>
        <Typography variant="body1">{apiErrorText}</Typography>
        <Typography variant="body1">Please feel free to try again.</Typography>
      </>
    );
  }

  const contactForm = (
    <ContactForm
      formState={formState}
      onSubmit={(event) => handleSubmit(event)}
      onChange={(e) => handleChange(e)}
    />
  );

  return (
    <section>
      <Typography variant="h1">Say Hello</Typography>
      {mainText}
      {formState === FormState.sent ? successMessage : contactForm}
    </section>
  );
};

export default Contact;
