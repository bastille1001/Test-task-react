import React from 'react';
import './index.css';
import './styles/loadUser.css';


export class LoadUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
        }
    }

    render(){
        const {items} = this.props;
        return(
            <div className="wrapperDiv">
                <div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th >User Id</th>
                                <th >Registration Date</th>
                                <th >Last Activity Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items?.map(item => (
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