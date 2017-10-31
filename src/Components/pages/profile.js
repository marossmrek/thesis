import React from 'react';
import {User} from '../../Service/user-service';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                name:"",
                surname:"",
                university:"",
                faculty:"",
            },
            open: false,
        }
    }

    componentWillMount() {
        this.loadProfile();
    }

    async loadProfile() {
        const profile = await User.getProfileByID(this.props.match.params.id);
        if (profile) {
            this.setState({
                profile: {
                    username:profile[1],
                    email:profile[3],
                    name:profile[4],
                    surname:profile[5],
                    university:profile[6],
                    faculty:profile[7],
                }
            });
        }
    };

    async updateProfile() {
        const updateProfile = await User.updateProfileByID(this.props.match.params.id, this.state.profile);
        if (updateProfile) {
            this.setState({
                profile:  {
                    username:updateProfile[1],
                    email:updateProfile[3],
                    name:updateProfile[4],
                    surname:updateProfile[5],
                    university:updateProfile[6],
                    faculty:updateProfile[7],
                },
                open:false
            });
        }
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false},this.loadProfile);
    };

    handleChange(event){
        let newFormValue = {...this.state.profile, [event.target.name]: event.target.value};
        this.setState({ profile:newFormValue });
    }

    handleSchoolChange (event, index, value) {
        let newFormValue = {...this.state.profile, university: value};
        this.setState({profile:newFormValue});
    };

    handleFacultyChange (event, index, value) {
        let newFormValue = {...this.state.profile, faculty: value};
        this.setState({profile:newFormValue});
    };

    render() {
        const actions = [
            <FlatButton
                label="Save"
                primary={true}
                onClick={this.updateProfile.bind(this)}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose.bind(this)}
            />,
        ];

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
                                             alt="User profile picture"/>

                                        <h3 className="profile-username text-center">{this.state.profile.username}</h3>

                                        <p className="text-muted text-center">{this.state.profile.email}</p>

                                        <ul className="list-group list-group-unbordered">
                                            <li className="list-group-item">
                                                <b>Name</b> <a className="pull-right">{this.state.profile.name ?
                                                this.state.profile.name : "Not add"}</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Surname</b> <a className="pull-right">{this.state.profile.surname ?
                                                this.state.profile.surname : "Not add"}</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>School</b> <a className="pull-right">{this.state.profile.university ?
                                                this.state.profile.university : "Not add"}</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Faculty</b> <a className="pull-right">{this.state.profile.faculty ?
                                                this.state.profile.faculty : "Not add"}</a>
                                            </li>
                                        </ul>
                                        <div className="col-md-offset-4 col-md-4">
                                            <RaisedButton fullWidth={true}
                                                          label="Edit profile" onClick={this.handleOpen}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Dialog
                                title="Edit profile"
                                autoDetectWindowHeight={true}
                                autoScrollBodyContent={true}
                                modal={false}
                                actions={actions}
                                onRequestClose={this.handleClose.bind(this)}
                                open={this.state.open}
                            >
                                <TextField
                                    name="name"
                                    value={this.state.profile.name}
                                    onChange={this.handleChange.bind(this)}
                                    floatingLabelText="Name"
                                /><br />
                                <TextField
                                    name="surname"
                                    value={this.state.profile.surname}
                                    onChange={this.handleChange.bind(this)}
                                    floatingLabelText="Surname"
                                /><br />
                                <SelectField
                                floatingLabelText="University"
                                value={this.state.profile.university}
                                name="university"
                                onChange={this.handleSchoolChange.bind(this)}
                                >
                                    <MenuItem value="First school" primaryText="First school" />
                                    <MenuItem value="Second school" primaryText="Second school" />
                                    <MenuItem value="Third school" primaryText="Third school" />
                                </SelectField>
                                <br />
                                <SelectField
                                    floatingLabelText="Faculty"
                                    value={this.state.profile.faculty}
                                    name="faculty"
                                    onChange={this.handleFacultyChange.bind(this)}
                                >
                                    <MenuItem value="First faculty" primaryText="First faculty" />
                                    <MenuItem value="Second faculty" primaryText="Second faculty" />
                                    <MenuItem value="Third faculty" primaryText="Third faculty" />
                                </SelectField>
                            </Dialog>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}



