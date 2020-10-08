import { Button, FormControlLabel, FormLabel, Input, Paper, Radio, RadioGroup } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react'
import { Link } from 'react-router-dom';
// правильный инпут
import DateFnsUtils from '@date-io/date-fns';
import locale from "date-fns/locale/ru";




// const styles = theme => ({
//     button: {
//     }

// });

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            date_birth: null,
            selectedDate: new Date()
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        console.log(name, value);
    }

    handleDateChange = date => {
        console.log(date);
        this.setState({ selectedDate: date })
    }

    render() {
        const { selectedDate } = this.state;

        return (
            <Paper className="user-form" elevation={3}>
                <div>
                    <h3 >Создание пользователя</h3>
                    <div >
                        <form onSubmit={this.submitHandler} >
                            <div className="form-holder">
                                <div className="form-box">
                                    <div>
                                        <FormLabel className="form-label">Имя:</FormLabel>
                                        <Input
                                            type='text'
                                            name='username'
                                            onChange={this.myChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <FormLabel className="form-label">Email:</FormLabel>
                                        <Input
                                            type='text'
                                            name='email'
                                            onChange={this.myChangeHandler}
                                        />
                                    </div>
                                    <div>
                                        <FormLabel className="form-label">Пароль:</FormLabel>
                                        <Input
                                            type='password'
                                            name='password'
                                            onChange={this.myChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-box">
                                    <div className="brd radio-holder">
                                        <FormLabel >Пол:</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender" onChange={this.myChangeHandler}>
                                            <FormControlLabel labelPlacement="start" className="radio-label" value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel labelPlacement="start" className="radio-label" value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
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
                                </div>
                            </div>
                            <div className="button-panel" >
                                <Button
                                    color="primary"
                                    variant="contained"
                                >Сохранить
                                </Button>
                                <Link className="text-link" to="/users">
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                    >Назад
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Paper>
        )
    }
}
export default UserForm