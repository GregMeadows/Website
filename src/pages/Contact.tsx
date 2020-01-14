import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button, Theme, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { BREAKPOINT_TABLET } from '../assets/consts';

interface FormElements {
    email: string;
    message: string;
    msg_password: string; // Honeypot
}

enum FormState {
    default,
    validating,
    sent,
    error,
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {        
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexBasis: 0,
        minWidth: 300,
        [theme.breakpoints.up(BREAKPOINT_TABLET)]: {
            marginRight: theme.spacing(4),
        },
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    obfuscate: {
        display: 'none !important',
    }
}), {
    classNamePrefix: 'contact',
});

export const Contact: FunctionComponent = () => {
    const classes = useStyles();
    const [values, setValues] = useState<FormElements>({
        email: '',
        message: '',
        msg_password: '',
    });
    const [messageErrorText, setMessageErrorText] = useState('');
    const [apiErrorText, setApiErrorText] = useState('');
    const [formState, setFormState] = useState<FormState>(FormState.default);

    const encode = (data: {[key: string]: string}) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormState(FormState.validating);

        // TODO check valid email
        // TODO Check honey pot / use reCaptcha

        // Check message length
        if (values.message.trim().length < 10) {
            setMessageErrorText('Please don\'t spam me with short messages');
            setFormState(FormState.default);
            return;
        }

        // Validation successful & send form
        fetch('https://gregmeadows.dev/', {
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
        if (messageErrorText) {
            setMessageErrorText('');
        }

        setValues({
            ...values,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    const successMessage = (
        <Typography variant='body1'>Thanks for the message! I'll back to you as soon as I can.</Typography>
    );

    let sideText;
    if (formState === FormState.default || formState === FormState.validating) {
        sideText = (
            <>
                <Typography variant='body1'>Use the from to send me a message.</Typography>
                <Typography variant='body1'>I'll try to get back to you as quick as possible, so ensure that your email is correct.</Typography>
            </>
        );
    } else if (formState === FormState.error) {
        sideText = (
            <>
                <Typography variant='body1'>Sorry, there was an issue while sending your message.</Typography>
                <Typography variant='body1'>{apiErrorText}</Typography>
                <Typography variant='body1'>Please feel free to try again.</Typography>
            </>
        );
    }

    const contactForm = (
        <Box
            display="flex"
            flexWrap="wrap"
        >
            <form
                name="contact"
                className={classes.form}
                method="post"
                onSubmit={handleSubmit}
            >
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    error={formState === FormState.error}
                    onChange={e => handleChange(e)}
                    required
                />
                <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows="8"
                    margin="normal"
                    error={messageErrorText !== '' || formState === FormState.error}
                    helperText={messageErrorText}
                    onChange={e => handleChange(e)}
                    required
                />
                <input
                    type="text"
                    name="msg_password"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={e => handleChange(e)}
                    className={classes.obfuscate}
                />
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    mt={2}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        disabled={formState !== FormState.default && formState !== FormState.error}
                    >
                        <SendIcon className={classes.icon} />
                        Send Message
                    </Button>
                </Box>
            </form>
            <Box 
                display="flex"
                flexDirection="column"
                flexGrow={1}
                flexBasis={0}
                minWidth={300}
            >
                {sideText}
            </Box>
        </Box>
    );

    return (
        <section>
            <Typography variant='h1'>Contact Me</Typography>
            {formState === FormState.sent ? successMessage : contactForm}
        </section>
    );
};