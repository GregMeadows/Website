import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import { Typography } from '@material-ui/core';
import { FormState, ContactForm } from '../components/ContactForm';

interface FormElements {
    email: string;
    message: string;
    website: string; // Honeypot
}

export const Contact: FunctionComponent = () => {
    const hasFilledForm = sessionStorage.getItem('contacted') === 'true';

    const [values, setValues] = useState<FormElements>({
        email: '',
        message: '',
        website: '',
    });
    const [apiErrorText, setApiErrorText] = useState('');
    const [formState, setFormState] = useState<FormState>(hasFilledForm ? FormState.sent : FormState.default);

    const encode = (data: {[key: string]: string}) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        sessionStorage.setItem('contacted', 'true');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...values }),
        })
        .then(() => {
            setFormState(FormState.sent);
        })
        .catch(error => {
            setApiErrorText(error);
            setFormState(FormState.error);
        });
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>){
        setValues({
            ...values,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    const successMessage = (
        <Typography variant='body1'>Thanks for the message! I'll back to you as soon as I can.</Typography>
    );

    let mainText;
    if (formState === FormState.default) {
        mainText = (
            <Typography variant='body1'>Use the from to send me a message. I'll try to get back to you as quick as possible.</Typography>
        );
    } else if (formState === FormState.error) {
        mainText = (
            <>
                <Typography variant='body1'>Sorry, there was an issue while sending your message.</Typography>
                <Typography variant='body1'>{apiErrorText}</Typography>
                <Typography variant='body1'>Please feel free to try again.</Typography>
            </>
        );
    }

    const contactForm = (
        <ContactForm
            formState={formState}
            onSubmit={handleSubmit}
            onChange={e => handleChange(e)}
        />
    );

    return (
        <section>
            <Typography variant='h1'>Say Hello</Typography>
            {mainText}
            {formState === FormState.sent ? successMessage : contactForm}
        </section>
    );
};