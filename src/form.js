import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Login} from './login';
import {Register} from './register';
import {User} from './Service/user-service';

export class Form extends React.Component {

    RegisterSubmit = (values) => {
        this.RegisterNewUser(values);
    };

    async RegisterNewUser(newUser) {
        const result = await User.register(newUser);
        if (result.status === 204) {
            window.location.href = "http://localhost:3000/login";
        } else {
            console.log("Something wrong on server");
        }
    }

    LoginSubmit = (values) => {
        this.LoginUser(values);
    };

    async LoginUser(values) {
        const user = await User.login(values);
        if (user) {
            this.props.loggedIn(user);
            window.location.href = "http://localhost:3000/app";
        } else {
            console.log("Something wrong on server");
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/register" component={(props) => {
                        return <Register onSubmit={this.RegisterSubmit}/>
                    }}/>
                    <Route path="/login" component={(props) => {
                        return <Login onSubmit={this.LoginSubmit}/>
                    }}/>
                </Switch>
            </Router>
        )
    }
}

