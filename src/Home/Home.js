import React, { Component } from 'react'
// import axios from 'axios'

export default class Home extends Component {
    // проверка связывания с фаербэйсом
    // componentDidMount() {
    //     axios.get('https://react-material-practice.firebaseio.com/user.json').then(response => {
    //         console.log(response);
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Im home</h1>
            </div>
        )
    }
}
