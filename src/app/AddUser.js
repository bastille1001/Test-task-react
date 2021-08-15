import React from 'react';
import moment from 'moment';

export class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newRegistrationDt: moment().format("DD-MMM-YYYY"),
            newLastActivityDt: moment().format("DD-MMM-YYYY")
        }
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.newRegistrationDt);
        this.setState({
            newRegistrationDt: event.target.newRegistrationDt, 
            newLastActivityDt: event.target.newLastActivityDt
        });
    }

    addUser() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { 
                    registrationDt: this.state.newRegistrationDt, 
                    lastActivityDt: this.state.newLastActivityDt  
                })
        };
        fetch('https://localhost:44302/api/user/save', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render(){
        let {newRegistrationDt, newLastActivityDt} = this.state;
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="date" 
                                    value={newRegistrationDt} 
                                    onChange={(event) => this.handleChange(event)} >
                                </input>
                            </td>
                            <td>
                                <input type="date"  
                                    value={newLastActivityDt} 
                                    onChange={(event) => this.handleChange(event)} >
                                </input>
                            </td>
                            <td><button onClick={this.addUser}>add user</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}