import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import './App.css';
import ErrorMessage from './errorMessage';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, errors, formState: { isSubmitSuccessful, isSubmitted, isSubmitting } } = useForm();
  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
  //     console.log(errors);
  //     const errs = Object.keys(errors);
  //     console.log(errs);
  //     if (errs.length === 2) {
  //       setErrEmail(true);
  //       setErrPass(true);
  //     } else {
  //       errs.forEach(err => {
  //         if (err === 'email') {
  //           setErrEmail(true);
  //           setErrPass(false);
  //         } else {
  //           setErrPass(true)
  //           setErrEmail(false);
  //         }
  //       })
  //     }
  //   }
  // }, [errors])

  // const validateInput = () => {
  //   console.log(errors)
  //   if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
  //     console.log(errors);
  //     const errs = Object.keys(errors);
  //     console.log(errs);
  //     if (errs.length === 2) {
  //       setErrEmail(true);
  //       setErrPass(true);
  //       return false;
  //     } else {
  //       errs.forEach(err => {
  //         if (err === 'email') {
  //           setErrEmail(true);
  //           setErrPass(false);
  //           return false;
  //         } else {
  //           setErrPass(true)
  //           setErrEmail(false);
  //           return false;
  //         }
  //       })
  //     }
  //   }
  // }

  const onSubmit = (data) => {
    console.log(data);
    // console.log(isSubmitted);
  }

  const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
          <TextField
            error={errEmail}
            inputRef={register({ required: true, pattern: patternEmail })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <ErrorMessage error={errors.email} setErrEmail={setErrEmail} />
          <TextField
            error={errPass}
            inputRef={register({ required: true, minLength: 6 })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <ErrorMessage error={errors.password} setErrPass={setErrPass} />
          <FormControlLabel
            control={<Checkbox name='remember' inputRef={register} color="primary" defaultValue={false} />}
            label="Remember me"
          />
          <Button
            disabled={isSubmitSuccessful}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}