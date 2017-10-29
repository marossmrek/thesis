import React from 'react';
import {User} from '../../Service/user-service';

export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: ''
        }
    }

    componentWillMount() {
        this.loadProfile();
    }

    async loadProfile() {
        const profile = await User.getProfileByID(this.props.match.params.id);
        if (profile) {
            this.setState({
                profile: profile
            });
        }
    };

    render() {
        return (
            <div>
                <div className="content-wrapper" style={{minHeight: "916px"}}>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8">

                                <div className="box box-primary">
                                    <div className="box-body box-profile">
                                        <img className="profile-user-img img-responsive img-circle"
                                             src="https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png"
                                             alt="User profile picture" />

                                            <h3 className="profile-username text-center">{this.state.profile[1]}</h3>

                                            <p className="text-muted text-center">{this.state.profile[3]}</p>

                                            <ul className="list-group list-group-unbordered">
                                                <li className="list-group-item">
                                                    <b>Name</b> <a className="pull-right">Empty</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Surname</b> <a className="pull-right">Empty</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>School</b> <a className="pull-right">Empty</a>
                                                </li>
                                                <li className="list-group-item">
                                                    <b>Faculty</b> <a className="pull-right">Empty</a>
                                                </li>
                                            </ul>
                                        <a href="#" className="btn btn-primary btn-block"><b>Edit</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}



