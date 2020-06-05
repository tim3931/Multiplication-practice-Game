import React, { Component } from 'react'


const Question = (props) => {
        return (
            <React.Fragment>
                <div id={props.id}>
                     {props.multiplicad} x {props.multiplier} = <input type="text" placeholder="Answer" onChange={props.changeHandler}/>
                </div>
                <br/>
            </React.Fragment>
        )
    
}

export default Question
