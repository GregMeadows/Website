import DoneIcon from '@mui/icons-material/Done';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  Alert,
  AlertColor,
  AlertTitle,
  Button,
  CircularProgress,
  Collapse,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

export interface FormElements {
  name: string;
  email: string;
  message: string;
  website: string; // Honeypot
}

export enum FormState {
  default,
  sending,
  sent,
  error,
}

interface ContactFormProps {
  formState: FormState;
  defaultValues: Omit<FormElements, 'website'>;
  errorText: string;
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
    maxWidth: '80rem',
    margin: '3rem auto 0',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },
  grid: {
    marginTop: '1rem',
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
    margin: '0 3rem',
  },
}));

const ContactForm: FunctionComponent<ContactFormProps> = function ContactForm({
  formState,
  defaultValues,
  errorText,
  onSubmit,
  onChange,
}) {
  const { classes } = useStyles();
  const disableControls =
    formState === FormState.sent || formState === FormState.sending;

  let alertText;
  let severity: AlertColor = 'info';
  if (formState === FormState.sent) {
    severity = 'success';
    alertText = (
      <>
        <AlertTitle>Thanks for the message!</AlertTitle>
        <Typography variant="body1">
          I&apos;ll get back to you shortly.
        </Typography>
      </>
    );
  } else if (formState === FormState.error) {
    severity = 'error';
    alertText = (
      <>
        <AlertTitle>There was an issue sending your message.</AlertTitle>
        <Typography variant="body1">
          Reason: <strong>{errorText}</strong>
        </Typography>
        <Typography variant="body1">Please feel free to try again.</Typography>
      </>
    );
  }

  let sendText;
  if (formState === FormState.sending) {
    sendText = (
      <CircularProgress
        color="secondary"
        size="1.5rem"
        className={classes.progress}
      />
    );
  } else if (formState === FormState.sent) {
    sendText = (
      <>
        <DoneIcon className={classes.icon} />
        Message Sent
      </>
    );
  } else {
    sendText = (
      <>
        <SendRoundedIcon className={classes.icon} />
        Send Message
      </>
    );
  }

  return (
    <form
      name="contact"
      className={classes.form}
      method="post"
      onSubmit={onSubmit}
    >
      <Collapse
        in={formState === FormState.sent || formState === FormState.error}
      >
        <Alert severity={severity}>{alertText}</Alert>
      </Collapse>
      <Grid container spacing={2} className={classes.grid}>
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
            defaultValue={defaultValues.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            error={formState === FormState.error}
            onChange={(e) => onChange(e)}
            required
            disabled={disableControls}
            className={classes.width}
            defaultValue={defaultValues.email}
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
            defaultValue={defaultValues.message}
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
            {sendText}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
