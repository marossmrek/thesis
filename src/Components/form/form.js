import React from 'react';
import {Login} from './login';
import {Register} from './register';
import {User} from '../../Service/user-service';

export class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            alert:{
                open:false,
                classColor:"info",
                text:""
            }
        }
    }

    RegisterSubmit = (values) => {
        this.RegisterNewUser(values);
    };

    async RegisterNewUser(newUser) {
        const result = await User.register(newUser);

        if (result.status === 204) {
            this.props.history.push('/login');
            this.setState({
                alert:{
                    open:true,
                    classColor:"success",
                    text:"Registration success"
                }
            })
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
            window.location.href = window.location + "/app"
        } else {
            console.log("Something wrong on server");
        }
    }

    render() {
        return (
            <div>
                {this.state.alert.open && <div className={`alert alert-${this.state.alert.classColor}`}
                                               role="alert">{this.state.alert.text}</div>}
                {window.location.pathname === "/login" ? <Login onSubmit={this.LoginSubmit}/>
                    : <Register onSubmit={this.RegisterSubmit}/>
                }
            </div>
        )
    }
}

