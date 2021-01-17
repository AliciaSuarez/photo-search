import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './style';
import ErrorIcon from '@material-ui/icons/ErrorRounded';

export default function Error(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.error}>
      <ErrorIcon className={classes.errorMessage} />
      {props.message}
    </Paper>
  );
}
