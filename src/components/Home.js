import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './images/7-eleven_logo.png';

class Home extends Component {
    static propTypes = {

    }


    render() {
        return (
            <React.Fragment>
                <div class="d-flex rounded" id="icon-bg">
                    <img id="icon" class="justify-content-center rounded" src={logo} alt={"Logo"}/>
                </div> 
              <h1 class="text-center font-weight-bold text-danger">Game Rule</h1>
              <h2 class="text-left font-weight-bold text-dark"><p>1. Read the conversation with Mr Bean and get the<span class="text-danger"> name of goods</span>,</p>
                <p>the <span class="text-danger">number of goods</span> Mr.Bean wants 
                and <span class="text-danger">calculate the price</span> </p><p>for Mr.Bean.</p>
                </h2>
                <br/>
                <h2 class="text-left font-weight-bold text-dark">2. Click the <span class="text-danger"> correct good</span> and the<span class="text-danger"> correct number</span> in the goods list.</h2>
                <br/>
                <h2 class="text-left font-weight-bold text-dark">3. Enter the <span class="text-danger"> correct price</span> and click<span class="text-danger"> confirm</span> to charge Mr.Bean.</h2>
                <br/>
                <div class="text-center"><button class="btn btn-danger"><Link class="text-white" to="/Student">Click Me to Play</Link></button></div>
            </React.Fragment>  
        )
    }
}

export default Home
