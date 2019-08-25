import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button, Theme, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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

    function handleSubmit() {
        alert('submit');
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
                        label="Email"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows="6"
                        margin="normal"
                    />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        mt={2}
                    >
                        <Typography variant="subtitle2">Both Fields Required</Typography>
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