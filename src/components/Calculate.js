import React from 'react';
import { Line } from 'react-chartjs-2';
import './styles/calculate.css';


export class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rollingRetention: [],
            xDay: 7,
            items: this.props,
            isClicked: false,
            days: [1,2,3,4,5,6,7]
        }
    }

    rollingRetention = () => {
        const {rollingRetention} = this.state;
        const {days} = this.state;
        
        if(this.state.isClicked){
            return <Line
            data={{
                labels: days?.map(x => "day " + x),
                datasets:[{
                    label: 'Rolling retention',
                    data: rollingRetention?.map(x => x),
                    backgroundColor: 'blue',
                    borderColor: 'green',
                    borderWidth: 1,
                    fill: false,
                    tension: 0.2
                }]
            }}
            height={300}
            width={300}
            options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                }
            }}
            >
            </Line>
        }
    }

    calculate = async () => {
            const res = await fetch(`http://testappapi.somee.com/TestAppApi/api/user/calculate?xDay=${this.state.xDay}`);
            const json = await res.json();
            this.setState({
                rollingRetention: json
            });
    }

    createBar = () => {
        const {items} = this.props;
        if (this.state.isClicked) {
            return <Line
            data={{
                labels: items?.map(x => "user id - " + x.userId),
                datasets:[{
                    label: 'Life Time',
                    data: items?.map(x => x.lifeTime),
                    backgroundColor: 'blue',
                    borderColor: 'green',
                    borderWidth: 1,
                    fill: true,
                    tension: 0.2
                }]
            }}
            height={300}
            width={300}
            options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                }
            }}>
        </Line>
        }
    }

    render(){
        return(
            <div>
                <div className="brLine"></div>
                <div className="calcBtnDiv">
                    <button className="button" onClick={() => {
                        this.calculate();
                        this.setState({isClicked: true})
                    }}>
                        Calculate
                    </button>
                </div>
                <div>{this.createBar()}</div>
                <div>{this.rollingRetention()}</div>
            </div>
        );
    }
}