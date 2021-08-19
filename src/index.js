import React from 'react';
import ReactDOM from 'react-dom';
import { LoadUser } from './components/LoadUser';
import { AddUser } from './components/AddUser';
import { Calculate } from './components/Calculate';

class TestTaskApp extends React.Component{
    
    state={
        isLoaded: false,
        items:[],
    }
    

    componentDidMount = async () => {
        const res = await fetch("http://testappapi.somee.com/TestAppApi/api/user");
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
                    items={this.state.items}
                />

                <AddUser 
                    items={this.state.items}
                />
                
                <Calculate
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