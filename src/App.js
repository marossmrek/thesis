import React from 'react';
import './App.css';
import {Navigation} from './navigation';
import {Timetable} from './timetable';
import {Form} from './form';
import {LandingPage} from './landingPage';
import {Profile} from './profile';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logUser : JSON.parse(this.props.root.UserLoggedIn)
        }
    }

    render() {

        let routing = null;

        JSON.parse(this.props.root.UserLoggedIn) ? (
            routing =
                <div>
                    <Redirect to="/app"/>
                    <Route path="/app" component={(props) => {
                        return <Navigation loggedOut={this.props.loggedIn} user={this.state.logUser}/>
                    }}/>
                    <Route exact path="/app/timetable" component={Timetable}/>
                    <Route exact path="/app/profile/:id" component={Profile}/>
                </div>
        ) : (
            routing =
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/login" component={(props) => {
                        return <Form loggedIn={this.props.loggedIn}/>
                    }}/>
                </div>
        );

        return (
            <Router>
                {routing}
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        root: state.root
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loggedIn: (log) => {
            dispatch({
                type: "SWITCH_LOGGED_IN",
                payload: log
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
