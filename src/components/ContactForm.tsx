import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

export enum FormState {
  default,
  sending,
  sent,
  error,
}

interface ContactFormProps {
  formState: FormState;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => void;
}

const useStyles = makeStyles()((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginTop: '2rem',
    maxWidth: '80%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  honeypot: {
    display: 'none !important',
  },
  width: {
    width: '100%',
  },
  submit: {
    textAlign: 'right',
  },
  progress: {
    marginLeft: '3rem',
    marginRight: '4rem',
  },
}));

const ContactForm: FunctionComponent<ContactFormProps> = function ContactForm({
  formState,
  onSubmit,
  onChange,
}) {
  const { classes } = useStyles();
  const disableControls =
    formState === FormState.sent || formState === FormState.sending;

  return (
    <form
      name="contact"
      className={classes.form}
      method="post"
      onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            type="text"
            error={formState === FormState.error}
            onChange={(e) => onChange(e)}
            required
            disabled={disableControls}
            className={classes.width}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            error={formState === FormState.error}
            onChange={(e) => onChange(e)}
            required
            disabled={disableControls}
            className={classes.width}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows="8"
            error={formState === FormState.error}
            onChange={(e) => onChange(e)}
            inputProps={{
              minLength: 20,
            }}
            required
            disabled={disableControls}
            className={classes.width}
          />
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            onChange={(e) => onChange(e)}
            className={classes.honeypot}
          />
        </Grid>
        <Grid item xs={12} className={classes.submit}>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            disabled={disableControls}
          >
            {formState === FormState.sending ? (
              <CircularProgress
                color="secondary"
                size="1.5rem"
                className={classes.progress}
              />
            ) : (
              <>
                <SendRoundedIcon className={classes.icon} />
                Send Message
              </>
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
