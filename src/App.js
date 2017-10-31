import React from 'react';
import './Styles/App.css';
import {WrapperNav} from './Components/navigation/wrapperNav';
import {SchoolSubject} from './Components/pages/schoolSubject';
import {Form} from './Components/form/form';
import {LandingPage} from './Components/landingPage/landingPage';
import {Profile} from './Components/pages/profile';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logUser: JSON.parse(this.props.root.UserLoggedIn)
        }
    }

    render() {
        const customHistory = createBrowserHistory();

        let routing = null;

        JSON.parse(this.props.root.UserLoggedIn) ? (
            routing =
                <div>
                    <Redirect to="/app"/>
                    <Route path="/app" component={(props) => {
                        return <WrapperNav history={customHistory} loggedOut={this.props.loggedIn} user={this.state.logUser}/>
                    }}/>
                    <Route exact path="/app/subjects" component={SchoolSubject}/>
                    <Route exact path="/app/profile/:id" component={Profile}/>
                </div>
        ) : (
            routing =
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/login" component={(props) => {
                        return <Form history={customHistory} loggedIn={this.props.loggedIn}/>
                    }}/>
                    <Route exact path="/register" component={(props) => {
                        return <Form history={customHistory} loggedIn={this.props.loggedIn}/>
                    }}/>
                </div>
        );

        return (
            <MuiThemeProvider>
                <Router history={customHistory}>{routing}</Router>
            </MuiThemeProvider>
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
