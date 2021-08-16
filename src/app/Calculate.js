import React from 'react';

export class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            percentage: props.percentage,
            xDay: props.xDay,
            items: props.items
        }
    }
    
    handleChange = (e) => {
        let { value } = e.target
        this.setState({xDay : value})
    }

    render(){
        let {percentage,xDay,calculate} = this.props;
        return(
            <div>
                <div>
                    <button onClick={calculate}>
                        Calculate
                    </button>
                </div>
                <div>
                    <input type="number" defaultValue={xDay} onChange={(event) => this.handleChange(event)}>
                    </input>
                </div>
                <div>
                    <h1>{percentage}</h1>
                </div>
            </div>
        );
    }
}