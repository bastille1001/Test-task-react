import React from 'react';
import moment from 'moment';


export class AddUser extends React.Component{
    
    state={
        newRegistrationDt: moment().format("DD-MMM-YYYY"),
        newLastActivityDt: moment().format("DD-MMM-YYYY"),
    }
    dateTypes = {
        registration: "registration",
        lastActivity: "lastActivity"
    }       
    
    handleChange = (event, dateType) => {
        let { value } = event.target 
        if (dateType === this.dateTypes.registration) this.setState({ newRegistrationDt: value });
        else this.setState({ newLastActivityDt: value });
    }

    addUser = async () => {
        let { newRegistrationDt, newLastActivityDt } = this.state;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { 
                    registrationDt: newRegistrationDt, 
                    lastActivityDt: newLastActivityDt  
                }
            )
        };

        await fetch('https://localhost:44302/api/user', requestOptions)
            .then(response => response.json())
            .then(this.setState({
                newLastActivityDt: "",
                newRegistrationDt: ""
            }));
    }

    render(){
        let {newRegistrationDt, newLastActivityDt} = this.state;
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="newRegistrationDt">Registration Date: </label>
                                <input
                                    id="newRegistrationDt"
                                    type="date"
                                    value={newRegistrationDt} 
                                    onChange={(event) => this.handleChange(event, this.dateTypes.registration)} >
                                </input>
                            </td>
                            <td>
                                <label htmlFor="newLastActivityDt">Last Activity Date: </label>
                                <input
                                    id="newLastActivityDt"
                                    type="date"
                                    value={newLastActivityDt} 
                                    onChange={(event) => this.handleChange(event, this.dateTypes.lastActivity)} >
                                </input>
                            </td>
                            <td>
                                <button 
                                    disabled=
                                    {
                                        Date.parse(newRegistrationDt) > Date.parse(newLastActivityDt) 
                                        || (moment(newRegistrationDt, "DD-MMM-YYYY",true).isValid() 
                                        || moment(newLastActivityDt,"DD-MMM-YYYY",true).isValid())
                                    }
                                    onClick={this.addUser}> add user
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
