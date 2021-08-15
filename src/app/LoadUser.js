import React from 'react';

export class LoadUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items:[],
            newRegistrationDt: props.newRegistrationDt,
            lastActivityDt: props.lastActivityDt
        }
        this.getUsers = this.getUsers.bind(this);
    }

    getUsers() {
        return (fetch('https://localhost:44302/api/user/getall')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        }));
    }

    render(){
        
        return(
            <div>
                <div>
                    <button onClick={this.getUsers}>
                        Load users
                    </button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Registration Date</th>
                                <th>Last Activity Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items?.map(item => (
                                    <tr key={item.userId}>
                                        <td>{item.userId}</td>
                                        <td>{new Date(item.registrationDt).toLocaleDateString()}</td>
                                        <td>{new Date(item.lastActivityDt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}