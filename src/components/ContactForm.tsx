import React, { FunctionComponent, ChangeEvent, FormEvent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Button, Theme, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { BREAKPOINT_TABLET } from '../assets/consts';

interface FormElements {
    email: string;
    message: string;
    website: string; // Honeypot
}

export enum FormState {
    default,
    sent,
    error,
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {        
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: '2rem',
        maxWidth: '80%',
        [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
            maxWidth: '100%',
        },
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    honeypot: {
        display: 'none !important',
    }
}), {
    classNamePrefix: 'contact-form',
});

export const ContactForm: FunctionComponent<{
    formState: FormState;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => void;
}> = ({ formState, onSubmit, onChange }) => {
    const classes = useStyles();

    return (
        <Box
            display='flex'
            justifyContent='center'
        >
            <form
                name="contact"
                className={classes.form}
                method="post"
                onSubmit={onSubmit}
            >
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    error={formState === FormState.error}
                    onChange={e => onChange(e)}
                    required
                />
                <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows="8"
                    margin="normal"
                    onChange={e => onChange(e)}
                    inputProps={{
                        minLength: 20
                    }}
                    required
                />
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={e => onChange(e)}
                    className={classes.honeypot}
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
        </Box>
    );
};