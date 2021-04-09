import React, { Component } from 'react'

export default class PredictionCard extends Component {
    render() {
        let {name, marks, grade} = this.props;
        let exclaim = "";
        let sentence = "";
    
        let cgpa = (marks - 11) / 7.25;

        switch(grade){
            case "Excellent":
                exclaim = `Congratulations ${name}!`;
                sentence = ` You are doing `
                break;
            
            case "Good":
                exclaim = `Nice Job ${name}!`;
                sentence = ` You are doing `
                break;
            
            case "Average":
                exclaim = `${name}!`;
                sentence = ` You are doing `
                break;
            
            case "Fair": 
                exclaim = `Come on ${name}!`;
                sentence = ` You can do better than `;
                break;
            
            case "Poor":
                exclaim = `Come on ${name}!`;
                sentence = ` You can do better than `;
                break;
                        
            default:
                break;
        }

        return (
        <div className="report-card">
            <div className="analysis">
                {exclaim} {sentence} <span className="shine">{grade}</span>
                <br/>
                
                Your should get around <span className="shine">{marks.toFixed(2)}%</span> this sem
                <br/>
                CGPA: <span className="shine">{cgpa.toFixed(2)}</span> 
            </div>
        </div>
        );
    }
}
