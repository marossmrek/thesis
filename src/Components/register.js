import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {User} from '../Service/user-service';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username required'
    } else if (values.username.length < 4) {
        errors.username = 'Username must be 4 characters or more'
    }
    if (!values.email) {
        errors.email = 'Email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Password required'
    }
    if (!values.password2) {
        errors.password2 = 'Repeat password required'
    } else if (values.password !== values.password2) {
        errors.password2 = 'Repeat passwords not matched!'
    }
    return errors
};

const asyncValidate = async (values) => {
    let usernames = [];
    const result = await User.getUsernames();
    if (result) {
        result.forEach((r) => {
            usernames.push(r.username);
        })
    }
    if (usernames.includes(values.username)) {
        let error = {username: 'That username is taken'};
        throw error;
    }
};

const renderField = ({input, label, icon, type, meta: {asyncValidating, touched, error,}}) => (
    <div>
        {touched && error && <div className="alert alert-danger alert-dismissible">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            {error}
        </div>}
        <div className="form-group has-feedback">
            <input className="form-control" {...input} type={type} placeholder={label}/>
            <span className={icon}></span>
        </div>
    </div>
);

export class Register extends React.Component {

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div className="register-box">
                <div className="register-logo">
                    <Link to='/register' className="logo">
                        <p><b>Register </b>please</p>
                    </Link>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form onSubmit={handleSubmit}>
                        <Field name="username" type="text" component={renderField} label="Username"
                               icon="glyphicon glyphicon-user form-control-feedback"/>
                        <Field name="email" type="email" component={renderField} label="Email"
                               icon="glyphicon glyphicon-envelope form-control-feedback"/>
                        <Field name="password" type="password" component={renderField} label="Password"
                               icon="glyphicon glyphicon-lock form-control-feedback"/>
                        <Field name="password2" type="password" component={renderField} label="Repeat password"
                               icon="glyphicon glyphicon-log-in form-control-feedback"/>
                        <div className="row">
                            <div className="col-xs-8">
                                <Link className="text-center" to='/login'>I already have a membership</Link>
                            </div>
                            <div className="col-xs-4">
                                <button className="btn btn-primary btn-block btn-flat" type="submit"
                                        disabled={submitting}>Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Register = reduxForm({
    form: 'Register',
    validate,
    asyncValidate
})(Register);