import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 4) {
        errors.username = 'Must be 4 characters or more'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
};

const renderField = ({input, label, icon, type, meta: {touched, error, warning}}) => (
    <div>
        {touched && error && <div className="alert alert-danger alert-dismissible">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            {error}
        </div>}
        <div className="form-group has-feedback">
            <input className="form-control" {...input} placeholder={label} type={type}/>
            <span className={icon}></span>
        </div>
    </div>
);

export class Login extends React.Component {

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div className="login-box">
                <div className="login-logo">
                    <Link to='/login' className="logo">
                        <p><b>Login </b>please</p>
                    </Link>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form onSubmit={handleSubmit}>
                        <Field name="username" type="text" component={renderField} label="Username"
                               icon="glyphicon glyphicon-envelope form-control-feedback"/>

                        <Field name="password" type="password" component={renderField} label="Password"
                               icon="glyphicon glyphicon-lock form-control-feedback"/>

                        <div className="row">
                            <div className="col-xs-8">
                                <Link className="text-center" to='/register'>Register a new membership</Link>
                            </div>
                            <div className="col-xs-4">
                                <button className="btn btn-primary btn-block btn-flat" type="submit"
                                        disabled={submitting}
                                        onClick={this.props.login}>Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Login = reduxForm({
    form: 'Login',
    validate
})(Login);