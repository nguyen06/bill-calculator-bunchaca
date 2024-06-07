import React, {Component} from 'react';
import RenderDish from './RenderComponent';
import {DISHES} from '../shares/dishes';
import Header from './HeaderComponent';
import Receipt from './ReceiptComponent';
import Total from './TotalComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';

const initalState = {
    dishes: DISHES,
    selectedDishes: [],
    total: localStorage.getItem('total')
    //total:localStorage.getItem('total') !== 'null' ? 0 : localStorage.setItem('total',localStorage.getItem('total'))
};
class Main extends Component{
    constructor(props){
        super(props);
        this.state = initalState;
        localStorage.setItem('total',0);
        //isNaN(localStorage.getItem('total')) ? 0 : localStorage.getItem('total');
    }
    onDishSelect =(dish)=>{
        this.setState({
            selectedDishes: [...this.state.selectedDishes, dish],
        })
    }
    resetDish =()=>{
        //this.setState( initalState);
        this.setState({
            dishes: DISHES,
            selectedDishes: [],
            total: localStorage.getItem('total')
        })
    }
    removeLast =()=>{
        this.setState({
            selectedDishes: this.state.selectedDishes.slice(0,-1)
        })
    }
    addTotal =() =>{
        localStorage.setItem('total',parseFloat(localStorage.getItem("total")) + this.state.selectedDishes.map(item=>item.price).reduce((a,b)=>a+b,0));
        this.setState({
            dishes: DISHES,
            selectedDishes: [],
            total:localStorage.getItem('total')
        })
    }
    render(){
        const appertizerPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='1-6d')} onClick={(dish)=>this.onDishSelect(dish)}  />
            )
        }
        const newDishPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='new dish')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const phoPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='7-15')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const bunPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='16-25')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const vermicelliPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='26-36')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const comPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='37-48')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const drinkPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='drink')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const sideOrderPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='side order')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        
        return(
            <div>
                <div className='container mt-4 mb-4 '>
                    <div className='row justify-content-center'>
                        <div className='float-left'>
                            <Button color='primary' onClick={this.resetDish}>New Bill</Button>
                        </div>
                        <div>
                            <Button >+++</Button>
                        </div>
                        <div className='float-right'>
                            <Button color='primary' onClick={this.removeLast}>PoP</Button>
                        </div>                        
                        <div>
                            <Button >+++</Button>
                        </div>
                        <div className='float-right'>
                            <Button color='primary' onClick={this.addTotal}>getTotal</Button>
                        </div>
                    </div>
                </div>
                
                <Total total={this.state.total}/>
                <Receipt receipt={this.state.selectedDishes}/>
                <Header onClickHandler={this.resetDish} />
                <Switch>
                    <Route path='/1-6d' component={appertizerPage} />
                    <Route path='/newDish' component={newDishPage} />
                    <Route path='/7-15' component={phoPage} />
                    <Route path='/16-25' component={bunPage} />
                    <Route path='/26-36' component={vermicelliPage} />
                    <Route path='/37-48' component={comPage} />
                    <Route path='/drink' component={drinkPage} />
                    <Route path='/sideOrder' component={sideOrderPage} />
                </Switch>
            </div>
        )
    }
}

export default Main;