import React from 'react'
import {
  Button,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  FormButton: {
    textTransform: 'none',
    margin: 5, 
  }
}));

const FormButton = props => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.FormButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  )
}

export default FormButton