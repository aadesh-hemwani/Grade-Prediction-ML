import React, { Component } from 'react'
import PredictionCard from './PredictionCard';

export default class htmlForm extends Component {
    state = {
        name: "",
        gender: "",
        age: "",
        studytime: "",
        absences: "",
        health: "",
        failures: "",
        grade1: "",
        grade2: "",
        showResults: false,
        marks: 0,
        grade: ""
        // grade3: "",
    }
    constructor(){
        super();
        this.jello_anim = [{
            transform: "scale3d(1, 1, 1)"
        },
        {
            transform: "scale3d(1.25, 0.75, 1)"
        },
        {
            transform: "scale3d(0.75, 1.25, 1)"
        },
        {
            transform: "scale3d(1.15, 0.85, 1)"
        },
        {
            transform: "scale3d(0.95, 1.05, 1)"
        },
        {
            transform: "scale3d(1.05, 0.95, 1)"
        },
        {
            transform: "scale3d(1, 1, 1)"
        }]
    }

    handleChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: value,
        });
    }

    predict(){
        let url = "http://localhost:5000/predict";

        if(this.state.name === ""){
            document.querySelector("#name").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.gender === ""){
            document.querySelector("#gender").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.age === "" || this.state.age > 50){
            document.querySelector("#age").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.studytime === "" || this.state.studytime > 14){
            document.querySelector("#studytime").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.absences === "" || this.state.absences > 30){
            document.querySelector("#absences").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.health === ""){
            document.querySelector("#health").animate(this.jello_anim, 1000)
            return;
        }
        
        if(this.state.grade1 === "" || this.state.grade1 > 20 || this.state.grade1 < 0  ){
            document.querySelector("#grade1").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.grade2 === "" || this.state.grade2 > 20 || this.state.grade2 < 0){
            document.querySelector("#grade2").animate(this.jello_anim, 1000)
            return;
        }
        if(this.state.failures === "" || this.state.failures > 10){
            document.querySelector("#failures").animate(this.jello_anim, 1000)
            return;
        }
        
        let formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("G1", parseInt(this.state.grade1));
        formData.append("G2", parseInt(this.state.grade2));
        // formData.append("G3", parseInt(this.state.grade3));
        formData.append("age", parseInt(this.state.age));
        formData.append("sex", parseInt(this.state.gender));
        formData.append("studytime", parseInt(this.state.absences));
        formData.append("health", parseInt(this.state.health));
        formData.append("absences", parseInt(this.state.studytime));
        formData.append("failures", parseInt(this.state.failures));
    
        fetch(url, {
            method: "post",
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                marks: data["result"],
                grade: data["grade"],
                showResults: true
            });
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="section-2">
                <div className="title">Predict your Grades</div>
                <div className="form">
                    <div className="input-wrapper">
                        <label htmlFor="name">Student's Name</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.name}
                            type="text" 
                            name="name" 
                            id="name" 
                            className="input name" 
                            placeholder="Enter your full name" 
                        />
                    </div>     
                
                    <div className="input-wrapper">
                        <label htmlFor="gender">Gender</label>
                        <select className="input"  name="gender" id="gender" value={this.state.gender} onChange={this.handleChange}>
                            <option>Select</option>
                            <option value={1}>Male</option>
                            <option value={0}>Female</option>
                        </select>
                    </div>     

                    <div className="input-wrapper">
                        <label htmlFor="age">Student's Age</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.age}
                            type="number" 
                            name="age" 
                            id="age" 
                            className="input" 
                            placeholder="Enter your Age in Years" 
                        />
                    </div>     

                    
                    <div className="input-wrapper">
                        <label htmlFor="studytime">Study Time per day</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.studytime}
                            type="number" 
                            name="studytime" 
                            id="studytime" 
                            className="input" 
                            placeholder="in hours" 
                        />
                    </div>     
                    
                    
                    <div className="input-wrapper">
                        <label htmlFor="absences">Absences per month</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.absences}
                            type="number" 
                            name="absences" 
                            id="absences" 
                            className="input" 
                            placeholder="in days" 
                        />
                    </div>     


                    <div className="input-wrapper">
                        <label htmlFor="health">Health Status</label>
                        <select className="input" id="health" name="health" value={this.state.health} onChange={this.handleChange}>
                            <option>Select</option>
                            <option value={5}>Excellent</option>
                            <option value={4}>Mild</option>
                            <option value={3}>Moderate</option>
                            <option value={2}>Critical</option>
                            <option value={1}>Very Critical</option>                    
                        </select>
                    </div>     
                    
                    <div className="input-wrapper">
                        <label htmlFor="grade1">Grade 1</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.grade1}
                            type="number" 
                            name="grade1" 
                            id="grade1" 
                            className="input" 
                            placeholder="Grade" 
                        />
                    </div>     
                    
                    <div className="input-wrapper">
                        <label htmlFor="grade2">Grade 2</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.grade2}
                            type="number" 
                            name="grade2" 
                            id="grade2" 
                            className="input" 
                            placeholder="Grade" 
                        />
                    </div>     
                    
                    {/* <div className="input-wrapper">
                        <label htmlFor="grade1">Grade 3</label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.grade3}
                            type="number" 
                            name="grade3" 
                            className="input" 
                            placeholder="Grade" 
                        />
                    </div>      */}
                    
                    <div className="input-wrapper">
                        <label htmlFor="failures">Past class failures </label>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.failures}
                            type="number" 
                            name="failures" 
                            id="failures" 
                            className="input" 
                            placeholder="any failures" 
                            />
                    </div>     
                    <br/>
                    <button className="predict" onClick={this.predict.bind(this)}>Predict &#8594;</button> 
                </div>
                
                {this.state.showResults ? 
                    <PredictionCard grade={this.state.grade} marks={this.state.marks} name={this.state.name}/>
                : null}

            </div>
        )
    }
}
