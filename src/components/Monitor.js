import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class Teacher extends Component {
    state = {
        students:[{
            name: "Tom Chan",  total_time: 260,  donetask: 5, totaltask: 6, continuousdate:3
        },{
            name: "Mary Chan",  total_time: 590,  donetask: 3, totaltask: 6, continuousdate:3
        },{
            name: "Tim Lai",  total_time: 723, donetask: 6, totaltask: 6, continuousdate:6
        },{
            name: "Kayley Lam",  total_time: 557,  donetask: 5, totaltask: 6, continuousdate:2
        },{
            name: "Bob Lai",  total_time: 368,  donetask: 1, totaltask: 6, continuousdate:1
        },{
            name: "Ben Kwan",  total_time: 667,  donetask: 5, totaltask: 6, continuousdate:6
        },{
            name: "Ken Li",  total_time: 465,  donetask: 4, totaltask: 6, continuousdate:6
        },{
            name: "Jenny Feng",  total_time: 737,  donetask: 5, totaltask: 6, continuousdate:2
        },{
            name: "Grace Shek",  total_time: 758,  donetask:3, totaltask: 6, continuousdate:1
        },{
            name: "Ella Wong",  total_time: 867,  donetask: 5, totaltask: 6, continuousdate:6
        }],difficulty:["Easy","Normal","Difficult"], currentdifficulty:"Easy"
    }


    clickHandler = (event) =>{
        event.preventDefault();
        this.setState({currentdifficulty : this.state.difficulty[event.target.id]});
    }

    render() {
        return (
            <React.Fragment>
                <div class="d-flex my-2">
                    <h1 class="m-2 p-2">Question difficulty Setting: </h1>
                    <div class="p-2 border border-dark rounded d-flex w-50">
                        <button id="0" class="p-2 m-3 btn btn-primary flex-fill" onClick={this.clickHandler}>Easy</button>
                        <button id="1" class="p-2 m-3 btn btn-primary flex-fill" onClick={this.clickHandler}>Normal</button>
                        <button id="2" class="p-2 m-3 btn btn-primary flex-fill" onClick={this.clickHandler}>Difficult</button>
                    </div> 
                </div>
                    <div class="d-flex my-2">
                    <h1 class="m-2 p-2">Current Question Difficulty: </h1>
                    <div class="p-2 border border-dark rounded w-50">
                        <h1 class="text-center">{this.state.currentdifficulty}</h1>
                    </div>
                    </div>
              
                <hr/>
                <h1 class="m-0 p-2 text-center font-weight-bold bg-info text-white rounded-top">Student Record</h1>
                <table class="table table-hover table-dark rounded-bottom">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Time Performance</th>
                        <th scope="col">Average time per Question</th>
                        <th scope="col">Task</th>
                        <th scope="col">Continuous Date Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student,index)=>{
                            return(
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{student.name}</td>
                                    <td>{student.total_time}s</td>
                                    <td>{student.total_time/10}s</td>
                                    <td>{student.donetask} / {student.totaltask}</td>
                                    <td>{student.continuousdate}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                    </table>
            </React.Fragment> 
        )
    }
}

export default Teacher
