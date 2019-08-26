import React, { FunctionComponent, FormEvent, useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button, Theme, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

interface formElements {
    email: string | null;
    message: string | null;
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {        
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexBasis: 0,
        minWidth: 300,
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(4),
        },
    },
    icon: {
        marginRight: theme.spacing(1),
    }
}), {
        classNamePrefix: 'contact',
    });

export const Contact: FunctionComponent = () => {
    const classes = useStyles();
    const [values, setValues] = useState<formElements>({
        email: null,
        message: null,
    });
    const [errorText, setErrorText] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (values.message && values.message.trim() === '') {
            setErrorText('Please send me something more than 5 letters');
            return;
        }

        alert('submit');
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>){
        if (errorText) {
            setErrorText('');
        }

        setValues({
            ...values,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    return (
        <section>
            <Typography variant='h1'>Contact Me</Typography>
            <Box
                display="flex"
                flexWrap="wrap"
            >
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
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
                        error={errorText !== ''}
                        helperText={errorText}
                        onChange={e => handleChange(e)}
                        required
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
                    <Typography variant='body1'>
                        Use the from to send me a message.
                    </Typography>
                    <Typography variant='body1'>
                        I'll try to get back to you as quick as possible, so ensure that your email is correct.
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};