import React from 'react';

export class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            percentage: 0,
            xDay: 1
        }
        this.calculate = this.calculate.bind(this);
    }

    handleChange = (e) => {
        let { value } = e.target
        this.setState({xDay : value})
    }

    async calculate(){
        const res = await fetch(`https://localhost:44302/api/user/calculate?xDay=${this.state.xDay}`);
        const json = await res.json();
        this.setState({
            percentage: json
        });
    }

    render(){
        let {xDay, percentage} = this.state;
        return(
            <div>
                <div>
                    <button onClick={this.calculate}>
                        Calculate
                    </button>
                </div>
                <div>
                    <input type="number" value={xDay} onChange={(e) => this.handleChange(e)}></input>
                </div>
                <div>
                    <h1>{percentage}</h1>
                </div>
            </div>
        );
    }
}