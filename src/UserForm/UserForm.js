import { Button, Input, Paper, withStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';


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
    }

});

class UserForm extends React.Component {

    submitHandler = event => {
        event.preventDefault()
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            code: '',
            date_birth: null
        };
    }
    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        if (name === "age") {
            if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        this.setState({ [name]: val });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root} elevation={3}>
                <div>
                    <h3 className={classes.h1}>Создание пользователя</h3>
                    <form className={classes.form} onSubmit={this.submitHandler} >
                        <div>
                            <label>Имя:</label>
                            <Input
                                className={classes.input}
                                type='text'
                                name='username'
                                onChange={this.myChangeHandler}
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <Input
                                className={classes.input}
                                type='text'
                                name='email'
                                onChange={this.myChangeHandler}
                            />
                        </div>
                        <div>
                            <label>Код:</label>
                            <Input
                                className={classes.input}
                                type='text'
                                name='code'
                                onChange={this.myChangeHandler}
                            />
                        </div>

                        <div>
                            <label>Дата рождения:</label>

                        </div>
                    </form>
                    <Button
                        color="primary"
                        variant="contained"
                    >Сохранить
                    </Button>
                    <Link className="text-link" to="/users">
                        <Button
                            color="secondary"
                            variant="contained"
                            className="add-button"
                        >Назад
                        </Button>
                    </Link>
                </div>
            </Paper>
        )
    }
}
export default withStyles(styles, { withTheme: true })(UserForm);