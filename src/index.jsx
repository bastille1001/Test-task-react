import React from 'react';
import ReactDOM from 'react-dom';
import { LoadUser } from './components/LoadUser';
import { AddUser } from './components/AddUser';
import { Calculate } from './components/Calculate';

class TestTaskApp extends React.Component{
    
    state={
        isLoaded: true,
        items:[],
    }
    

    componentDidMount = async () => {
        const res = await fetch(`${process.env.REACT_APP_TASK_API}api/user`);
        const json = await res.json();
        this.setState({
            isLoaded: false,
            items: json
        });
    }


    render(){
        return (
            <div>
                <LoadUser items={this.state.items} isLoaded={this.state.isLoaded}/>
                <br />

                <AddUser items={this.state.items}
                />
                <br />

                <Calculate items={this.state.items}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TestTaskApp />,
    document.getElementById('root')
);