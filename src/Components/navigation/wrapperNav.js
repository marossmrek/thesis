import React from "react";
import {HorizontalNav} from "./horizontalNav";
import {VerticalNav} from "./verticalNav";
import {User} from '../../Service/user-service';

export class WrapperNav extends React.Component {

    handleLogout() {
        this.logout();
    }

    async logout() {
        await User.logout();
        this.props.loggedOut('');
        window.location.href = "http://localhost:3000";
    }

    render() {
        return (
            <div>
                <HorizontalNav handleLogout={this.handleLogout.bind(this)} user={this.props.user}/>
                <VerticalNav user={this.props.user}/>
            </div>
        )
    }
}




