import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

export default class UserForm extends React.Component {
    submitHandler = event => {
        event.preventDefault()
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
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
        return (
            <div>
                <h3>Создание пользователя</h3>
                <form onSubmit={this.submitHandler} >
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your age:</p>
                    <input
                        type='text'
                        name='age'
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your email:</p>
                    <input
                        type='text'
                        name='email'
                        onChange={this.myChangeHandler}
                    />
                </form>
                <Button  
                    color="primary" 
                    variant="contained"
                >
                    Сохранить
                </Button>
                <Link className="text-link" to="/users">
                    <Button  
                        color="secondary" 
                        variant="contained" 
                        className="add-button"
                    >
                    Назад
                    </Button>
                </Link>
            </div>
        )
    }
}
