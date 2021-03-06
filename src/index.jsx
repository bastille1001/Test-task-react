import React from 'react';
import ReactDOM from 'react-dom';
import { LoadUser } from './components/LoadUser';
import { AddUser } from './components/AddUser';
import { Calculate } from './components/Calculate';

class TestTaskApp extends React.Component {

    state = {
        isLoaded: true,
        items: [],
    }

    fetchAllList = () => {
         fetch(`https://testappapi.somee.com/TestAppApi/api/user`).then(res => res.json()).then(res => this.setState({
            isLoaded: false,
            items: res
        }));
    }


    componentDidMount = async () => {
        this.fetchAllList();
    }


    render() {
        return (
            <div>
                <LoadUser items={this.state.items} isLoaded={this.state.isLoaded} fetchAllList={this.fetchAllList}/>
                <br />

                <AddUser items={this.state.items} fetchAllList={this.fetchAllList}
                />
                <br />

                <Calculate items={this.state.items} />
            </div>
        );
    }
}

ReactDOM.render(
    <TestTaskApp />,
    document.getElementById('root')
);