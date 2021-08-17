import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            percentage: props.percentage,
            xDay: props.xDay,
            items: props.items,
            isClicked: false
        }
    }

    createBar =() => {
        const {items} = this.props;
        if (this.state.isClicked) {
            return <Bar
            data={{
                labels: items?.map(x => "user id - " + x.userId),
                datasets:[{
                    label: 'Life Time',
                    data: items?.map(x => x.lifeTime),
                    backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,99,132,0.6)'
                    ],
                    borderWidth: 1
                }]
            }}
            options={{}}>
        </Bar>
        }
    }

    handleChange = (e) => {
        let { value } = e.target
        this.setState({
            xDay : value
        })
    }

    render(){
        const {percentage,xDay,calculate} = this.props;
        
        return(
            <div>
                <div>{this.createBar()}</div>
                <div>
                    <button onClick={() => {
                        calculate();
                        this.state.isClicked = true;
                    }}>
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