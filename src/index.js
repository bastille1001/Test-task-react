import React from 'react';
import ReactDOM from 'react-dom';
import { LoadUser } from './app/LoadUser';
import { AddUser } from './app/AddUser';
import moment from 'moment';

class TestTaskApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            newRegistrationDt: moment().format("YYYY-MM-DD"),
            newLastActivityDt: moment().format("YYYY-MM-DD")
        }
    }

    render(){
        return (
            
            <div>
                <LoadUser items = {this.state.items}/>
                <AddUser 
                    newRegistrationDt={this.state.newRegistrationDt}
                    newLastActivityDt={this.state.newLastActivityDt}
                />
            </div>
            
        );
    }
}

ReactDOM.render(
    <TestTaskApp />,
    document.getElementById('root')
);