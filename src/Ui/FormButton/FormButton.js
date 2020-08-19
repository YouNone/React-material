import React from 'react'
import './Button.scss'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  FormButton: {
    color: 'primary',
    margin: 5,
  }
}));

const FormButton = props => {
  const classes = useStyles();

  // const cls = [
  //   classes.Button,
  //   classes[props.type]
  // ]

  return (
    <Button
      className={classes.FormButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  )
}

export default FormButton