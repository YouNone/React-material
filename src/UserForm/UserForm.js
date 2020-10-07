import { Button, FormControlLabel, FormLabel, Input, Paper, Radio, RadioGroup, withStyles } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react'
import { Link } from 'react-router-dom';
// правильный инпут
import DateFnsUtils from '@date-io/date-fns';
import locale from "date-fns/locale/ru";




const styles = theme => ({
    root: {
        // border: "1px solid red",
        width: '300px',
        height: '500px',
        margin: '20px auto',

    },
    h1: {
        padding: '15px'
    },

    input: {
        margin: '10px'

    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: '15px 15px 5px'
    }

});

class UserForm extends React.Component {

    // submitHandler = event => {
    //     event.preventDefault()
    // }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            date_birth: null,
            selectedDate: new Date()
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        // if (name === "age") {
        //     if (!Number(val)) {
        //         alert("Your age must be a number");
        //     }
        // }
        this.setState({ [name]: val });
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date })
    }

    render() {
        const { classes } = this.props;
        const { selectedDate } = this.state;

        return (
            <Paper className={classes.root} elevation={3}>
                <div>
                    <h3 className={classes.h1}>Создание пользователя</h3>
                    <form className={classes.form} onSubmit={this.submitHandler} >
                        <div>
                            <FormLabel>Имя:</FormLabel>
                            <Input
                                className={classes.input}
                                type='text'
                                name='username'
                                onChange={this.myChangeHandler}
                            />
                        </div>
                        <div>
                            <FormLabel>Пол:</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" onChange={this.onChangeValue}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel>Email:</FormLabel>
                            <Input
                                className={classes.input}
                                type='text'
                                name='email'
                                onChange={this.myChangeHandler}
                            />
                        </div>
                        <div>
                            <FormLabel>Пароль:</FormLabel>
                            <Input
                                className={classes.input}
                                type='password'
                                name='password'
                                onChange={this.myChangeHandler}
                            />
                        </div>
                        <div>
                            <FormLabel>Дата рождения:</FormLabel>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}
                            >
                                <div className="pickers">
                                    <DatePicker
                                        value={selectedDate}
                                        onChange={this.handleDateChange}
                                    />
                                </div>
                            </MuiPickersUtilsProvider>
                        </div>
                    </form>
                    <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                    >Сохранить
                    </Button>
                    <Link className="text-link" to="/users">
                        <Button
                            className={classes.button}
                            color="secondary"
                            variant="contained"
                        >Назад
                        </Button>
                    </Link>
                </div>
            </Paper>
        )
    }
}
export default withStyles(styles, { withTheme: true })(UserForm);