import React from 'react';
import ReactDOM from 'react-dom';
import { LoadUser } from './app/LoadUser';
import { AddUser } from './app/AddUser';
import { Calculate } from './app/Calculate';

class TestTaskApp extends React.Component{
    
    state={
        isLoaded: false,
        items:[],
        xDay: 7,
        percentage: 0,
    }

    calculate = async () => {
        const res = await fetch(`https://localhost:44302/api/user/calculate?xDay=${this.state.xDay}`);
        const json = await res.json();
        this.setState({
            percentage: json
        });    
    }

    getUsers = async () => {
        
        const res = await fetch('https://localhost:44302/api/user/getall');
        const json = await res.json();
        this.setState({
            isLoaded: true,
            items: json
        });
    }


    render(){
        return (
            <div>
                <LoadUser 
                    getUsers={this.getUsers} 
                    items={this.state.items} 
                />

                <AddUser />
                
                <Calculate 
                    calculate={this.calculate} 
                    percentage={this.state.percentage}  
                    xDay={this.state.xDay} 
                    items={this.state.items}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <TestTaskApp />,
    document.getElementById('root')
);