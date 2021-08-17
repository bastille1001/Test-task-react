import React from 'react';
import './index.css';

export class LoadUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [{
                userId: 1,
                registrationDt: new Date(),
                lastActivityDt: new Date()
            },
            {
                userId: 2,
                registrationDt: new Date(),
                lastActivityDt: new Date()
            },
            {
                userId: 3,
                registrationDt: new Date(),
                lastActivityDt: new Date()
            },
            {
                userId: 4,
                registrationDt: new Date(),
                lastActivityDt: new Date()
            },
            {
                userId: 5,
                registrationDt: new Date(),
                lastActivityDt: new Date()
            }
        ]
            // items: props.items,
        }
    }

    render(){
        // const {items} = this.props;
        return(
            <div >
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >User Id</th>
                                <th >Registration Date</th>
                                <th >Last Activity Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items?.map(item => (
                                    <tr key={item.userId}>
                                        <td >{item.userId}</td>
                                        <td >{new Date(item.registrationDt).toLocaleDateString()}</td>
                                        <td >{new Date(item.lastActivityDt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}