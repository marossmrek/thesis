import React from 'react';
import {User} from '../Service/user-service';

export class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            profile: ''
        }
    }

    componentWillMount() {
        this.loadProfile();
    }

    async loadProfile() {
        const profile  = await User.getProfileByID(this.props.match.params.id);
        if(profile){
            this.setState({
                profile: profile
            });
        }
    };

    render() {
        return(
            <div>
                <div className="content-wrapper" style={{minHeight: "916px"}}>
                    <section className="content-header">
                        <h1>
                            My profile
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}