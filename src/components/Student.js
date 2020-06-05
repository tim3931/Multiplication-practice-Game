import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import UniqueId from 'react-html-id'
import logo from './images/7-eleven_logo.png';
import "./css/swiper.min.css";
import "./css/swiper.css";
import Swiper from 'react-id-swiper';


export class Student extends Component {
    constructor(){
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            name: "Tim Lai",
            isOpen: false,
            disabled: true,
            timecount: 0,
            questioncount: 0,
            goods: [{good:"Bread",price:1,  selected:false,  number:0},
            {good:"Chocolate",  price:2,  selected:false,  number:0},
            {good:"White Chocolate Chip",  price:3,  selected:false,  number:0}, 
            {good:"Churry Fish Ball",  price:4,  selected:false,  number:0}, 
            {good:"Coffee",  price:5,  selected:false,  number:0},
            {good:"Coke",  price:6,  selected:false,  number:0},
            {good:"Cookie",  price:7,  selected:false,  number:0},
            {good:"Ice Cream",  price:8,  selected:false,  number:0},
            {good:"Juice",  price:9, selected:false,  number:0},
            {good:"Rice Roll",  price:10,  selected:false,  number:0}],
            question: {
                good: "",
                price: 0,
                number: 0,
                total: 0,
                ans: 0
            }
            
        }
        this.componentDidMount();
    }


   changeHandler = (event) =>{

        //1. find the id
        const ans = this.state.question.ans;

        //2. copy the object
        const question = Object.assign({}, this.state.question);

        //3. put the input value into the copy
        question.ans = event.target.value;

        //4. copy the object array
        this.setState({question: question});

    }

    clickhandler = (event) =>{
        event.preventDefault();
        // console.log(event.target.id==1);
        if(event.target.id==1){
            this.state.goods[0].number +=1;
            document.getElementById('Item').innerText= "($1)"+this.state.goods[0].good + " x " + this.state.goods[0].number;
        }else if(event.target.id==2){
            this.state.goods[1].number +=1;
            document.getElementById('Item').innerText= "($2)"+this.state.goods[1].good + " x " + this.state.goods[1].number;
        }else if(event.target.id==3){
            this.state.goods[2].number +=1;
            document.getElementById('Item').innerText= "($3)"+this.state.goods[2].good + " x " + this.state.goods[2].number;
        }
        else if(event.target.id==4){
            this.state.goods[3].number +=1;
            document.getElementById('Item').innerText= "($4)"+this.state.goods[3].good + " x " + this.state.goods[3].number;
        }
        else if(event.target.id==5){
            this.state.goods[4].number +=1;
            document.getElementById('Item').innerText= "($5)"+this.state.goods[4].good + " x " + this.state.goods[4].number;
        }
        else if(event.target.id==6){
            this.state.goods[5].number +=1;
            document.getElementById('Item').innerText= "($6)"+this.state.goods[5].good + " x " + this.state.goods[5].number;
        }
        else if(event.target.id==7){
            this.state.goods[6].number +=1;
            document.getElementById('Item').innerText= "($7)"+this.state.goods[6].good + " x " + this.state.goods[6].number;
        }
        else if(event.target.id==8){
            this.state.goods[7].number +=1;
            document.getElementById('Item').innerText= "($8)"+this.state.goods[7].good + " x " + this.state.goods[7].number;
        }
        else if(event.target.id==9){
            this.state.goods[8].number +=1;
            document.getElementById('Item').innerText= "($9)"+this.state.goods[8].good + " x " + this.state.goods[8].number;
        }
        else{
            this.state.goods[9].number +=1;
            document.getElementById('Item').innerText= "($10)"+this.state.goods[9].good + " x " + this.state.goods[9].number;
        }

    }

    submithandler = (event) =>{
       let good = document.getElementById('Item').innerText; 
       let index = parseInt(good.substring(good.indexOf("$")+1,good.indexOf(")")),10)-1;
        if(this.state.question.good==this.state.goods[index].good){
            if(this.state.question.number==this.state.goods[index].number){
                if(this.state.question.ans==this.state.goods[index].number*this.state.goods[index].price){
                    document.getElementById('ans').innerText=this.state.goods[index].number+ " "+ this.state.goods[index].good + " will cost " + this.state.question.ans+ ". ";
                    document.getElementById('bean').innerText="Oh you are CORRECT! Well Done.";
                    this.state.disabled = false;
                }else{
                    document.getElementById('ans').innerText=this.state.goods[index].number+ " "+ this.state.goods[index].good + " will cost " + this.state.question.ans+ ". ";
                    document.getElementById('bean').innerText="Hmm..... The price seems to be incorrect... Try again? You should be smarter than me. ";
    
                }
            }else{
                document.getElementById('ans').innerText=this.state.goods[index].number+ " "+ this.state.goods[index].good + " will cost " + this.state.question.ans+ ". ";
                document.getElementById('bean').innerText="Hmm..... I want "+ this.state.question.number+ " " +this.state.question.good+ " NOT "+ this.state.goods[index].number + " " +this.state.goods[index].good+"! ";

            }
        }else{
            document.getElementById('ans').innerText=this.state.goods[index].number+ " "+ this.state.goods[index].good + " will cost " + this.state.question.ans+ ". ";
            document.getElementById('bean').innerText="Hmm..... I want "+this.state.question.good+ " NOT "+this.state.goods[index].good+"! ";

        }
       

            
    }

    clearhandler = () =>{
        document.getElementById('Item').innerText="";
        document.getElementById('ans').innerText="";
        document.getElementById('bean').innerText="";
        document.getElementsByTagName('input').text="";
        this.state.question.ans = 0;
        this.setState({
            goods: [{good:"Bread",price:1,  selected:false,  number:0},
            {good:"Chocolate",  price:2,  selected:false,  number:0},
            {good:"White Chocolate Chip",  price:3,  selected:false,  number:0}, 
            {good:"Churry Fish Ball",  price:4,  selected:false,  number:0}, 
            {good:"Coffee",  price:5,  selected:false,  number:0},
            {good:"Coke",  price:6,  selected:false,  number:0},
            {good:"Cookie",  price:7,  selected:false,  number:0},
            {good:"Ice Cream",  price:8,  selected:false,  number:0},
            {good:"Juice",  price:9, selected:false,  number:0},
            {good:"Rice Roll",  price:10,  selected:false,  number:0}]
        });
        
    }

    nexthandler = () =>{
        if(this.state.questioncount==10){
            this.props.history.push('/End')
        }
        document.getElementById('Item').innerText="";
        document.getElementById('ans').innerText="";
        document.getElementById('bean').innerText="";
        document.getElementsByTagName('input').text="";
        this.componentDidMount();
        this.componentWillMount();
        this.setState({
            timecount: 0,
            goods: [{good:"Bread",price:1,  selected:false,  number:0},
            {good:"Chocolate",  price:2,  selected:false,  number:0},
            {good:"White Chocolate Chip",  price:3,  selected:false,  number:0}, 
            {good:"Churry Fish Ball",  price:4,  selected:false,  number:0}, 
            {good:"Coffee",  price:5,  selected:false,  number:0},
            {good:"Coke",  price:6,  selected:false,  number:0},
            {good:"Cookie",  price:7,  selected:false,  number:0},
            {good:"Ice Cream",  price:8,  selected:false,  number:0},
            {good:"Juice",  price:9, selected:false,  number:0},
            {good:"Rice Roll",  price:10,  selected:false,  number:0}]
        });
        
    }
    
    render() {
        const params = {
            slidesPerView: 5,
            centeredSlides: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            spaceBetween: 50
          }
        return (
            <React.Fragment>
                 <div className="d-flex rounded" id="icon-bg">
                    <img id="icon" className="justify-content-center rounded" src={logo} alt={"Logo"}/>
                </div> 

                {/* Dialog Section */}
                <div className="d-flex flex-row dialog">
                    {/* customer */}
                    <div className="">
                        <img className="customer rounded" src={require("./images/customer1.png")}/>
                    </div>

                    {/* conversation */}
                    <div className="flex-grow-1 p-3" id="conversation">
                        <h1 className="text-center">Question: {this.state.questioncount} /10</h1>
                        <h1 className="text-center">Time: {this.state.timecount}s</h1>
                        <h3>Mr.Bean: Please, I want....</h3>
                        <h1 className="text-center font-weight-bold text-info" id="task">{this.state.question.good} x {this.state.question.number}</h1>
                        <h3 className="text-right">No Problem!</h3>
                        <h3>Mr.Bean: How much do I need to pay?</h3>
                        <h3 id="ans" className="text-right"></h3>
                        <h3 id="bean"></h3>
                        <button className="next btn btn-danger text-right" disabled={this.state.disabled} onClick={this.nexthandler}>Next</button>
                    </div>
                    
                    {/* Shopkeeper */}
                    <div className="mt-5">
                        <h1 className="text-center">{this.state.name}</h1>
                        <img className="me rounded" src={require("./images/me.PNG")}/>
                    </div>
                    
                </div>

                {/* Input Section */}
                <div className="border border-dark mb-5 rounded bg-white">
                <div className="font-weight-bold h1 p-3 m-0 border-bottom border-dark goodlist d-flex">
                    <div>Goods:</div>
                    <div className="flex-grow-1 text-center" id="Item"></div>
                    <div>
                        <form className="text-right">
                            <input className="inputbox" type="number" placeholder="Total" onChange={this.changeHandler.bind(this)}></input>
                            <Button onClick={this.submithandler}>Confirm</Button>
                            <Button type="reset" onClick={this.clearhandler}>Reset</Button>
                        </form>
                    </div>
                
                </div>
                <Swiper isOpen={this.state.isOpen} {...params}>
                    <div className="d-flex flex-column">
                        <img id="1" className="mx-auto good " src={require("./images/bread.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$1</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="2" className="mx-auto good" src={require("./images/chocolate.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$2</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="3" className="mx-auto good" src={require("./images/chocolatechip.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$3</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="4" className="mx-auto good" src={require("./images/churryfishball.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$4</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="5" className="mx-auto good" src={require("./images/coffee.png")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$5</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="6" className="mx-auto good" src={require("./images/cola.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$6</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="7" className="mx-auto good" src={require("./images/cookie.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$7</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="8" className="mx-auto good" src={require("./images/IceCream.PNG")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$8</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="9" className="mx-auto good" src={require("./images/Orange.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$9</div>
                        </div>
                    <div className="d-flex flex-column">
                        <img id="10" className="mx-auto good" src={require("./images/rice.jpg")} onClick={this.clickhandler} alt="goods"></img>
                        <div className="text-center font-weight-bold h1">$10</div>
                        </div>

                    
                </Swiper>
                </div>
           
            </React.Fragment>
        )
    }

    componentDidMount (){
        this.setState(prevState=>({
            questioncount: prevState.questioncount + 1
        }))
        var good = Math.floor(Math.random() * 10);
        var number = Math.floor(Math.random() * 10)+1;
        this.state.question.good = this.state.goods[good].good;
        this.state.question.price = this.state.goods[good].price;
        this.state.question.number = number;
        this.state.question.total = this.state.question.price*number;
        this.state.disabled = true;
        this.myInterval = setInterval(()=>{
            this.setState(prevState=>({
                timecount: prevState.timecount + 1
            }))
        }, 1000)
    }

    componentWillMount(){
        clearInterval(this.myInterval);
    }





}

export default Student
