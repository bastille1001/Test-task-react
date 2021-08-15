import React from 'react';
import ReactDOM from 'react-dom';
import { LoadUser } from './app/LoadUser';
import { AddUser } from './app/AddUser';
import { Calculate } from './app/Calculate';

class TestTaskApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            newRegistrationDt: "",
            newLastActivityDt: ""
        }
    }

    render(){
        return (
            
            <div>
                <LoadUser />
                <AddUser  
                    newRegistrationDt ={this.state.newRegistrationDt}
                    newLastActivityDt ={this.state.newLastActivityDt}/>
                <Calculate />
            </div>
            
        );
    }
}

ReactDOM.render(
    <TestTaskApp />,
    document.getElementById('root')
);