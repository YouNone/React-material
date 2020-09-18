import React from 'react'
import { 
	TextField, 
	// makeStyles
} from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
// 	TextField: {
// 		margin: 5,
// 		width:"100%"
// 	}
// }));


function isInvalid({ valid, touched, shouldValidate }) {
	return !valid && shouldValidate && touched
}

const FormInput = props => {
	// const classes = useStyles();

	const inputType = props.type || 'text'
	const htmlFor = `${inputType}-${Math.random()}`

	// if (isInvalid(props)) {
	//   cls.push(classes.invalid)
	// }

	return (
			<TextField
				label={props.label}
				type={inputType}
				id={htmlFor}
				value={props.value}
				variant="outlined"
				onChange={props.onChange}
				helperText={isInvalid(props) ? props.errorMessage || 'Введите верное значение' : null}
			/>
			
	)
}

export default FormInput