import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import './Input.scss'

const useStyles = makeStyles(theme => ({
	TextField: {
		margin: 5,
	}
}));


function isInvalid({ valid, touched, shouldValidate }) {
	return !valid && shouldValidate && touched
}

const FormInput = props => {
	const classes = useStyles();

	const inputType = props.type || 'text'
	const htmlFor = `${inputType}-${Math.random()}`

	// if (isInvalid(props)) {
	//   cls.push(classes.invalid)
	// }

	return (
		<div>
			{/* <label htmlFor={htmlFor}>{props.label}</label> */}
			<TextField
				// className="formInput"
				className={classes.TextField}
				label={props.label}
				type={inputType}
				id={htmlFor}
				value={props.value}
				variant="outlined"
				onChange={props.onChange}
			/>

			{
				isInvalid(props)
					? <span>{props.errorMessage || 'Введите верное значение'}</span>
					: null
			}
		</div>
	)
}

export default FormInput