import React from 'react';
import moment from 'moment';
import './styles/addUser.css';


export class AddUser extends React.Component{
    
    state={
        newRegistrationDt: moment().format("DD-MMM-YYYY"),
        newLastActivityDt: moment().format("DD-MMM-YYYY"),
        error: '',
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

        try{
            await fetch('http://testappapi.somee.com/TestAppApi/api/user', requestOptions)
            .then(response => {
                
                if (!response.ok){
                    throw Error("all fields required");
                }
                response.json()})
            .then(this.setState({
                newLastActivityDt: "",
                newRegistrationDt: "",
                error: null
            }));
        }
        catch(error){
            this.setState({
                error: error.message
            });
        }
        
    }

    render() {
        let {newRegistrationDt, newLastActivityDt} = this.state;
        return(
            <div className="mainDiv">
                <div className="errorDiv">{this.state.error}</div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="newRegistrationDt">Registration date: </label>
                                <input
                                    id="newRegistrationDt"
                                    type="date"
                                    value={newRegistrationDt} 
                                    onChange={(event) => this.handleChange(event, this.dateTypes.registration)} >
                                </input>
                            </td>
                            <td>
                                <label htmlFor="newLastActivityDt">Last activity date: </label>
                                <input
                                    id="newLastActivityDt"
                                    type="date"
                                    value={newLastActivityDt} 
                                    onChange={(event) => this.handleChange(event, this.dateTypes.lastActivity)} >
                                </input>
                            </td>
                            <td>
                                <button className="button" onClick={this.addUser}> Add user</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
