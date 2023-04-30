import React, {Component} from 'react';
import RenderDish from './RenderComponent';
import {DISHES} from '../shares/dishes';
import Header from './HeaderComponent';
import Receipt from './ReceiptComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';

const initalState = {
    dishes: DISHES,
    selectedDishes: []
};
class Main extends Component{
    constructor(props){
        super(props);
        this.state = initalState;
    }
    onDishSelect =(dish)=>{
        this.setState({
            selectedDishes: [...this.state.selectedDishes, dish],
        })
    }
    resetDish =()=>{
        this.setState( initalState);
    }

    render(){
        const appertizerPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='appertizer')} onClick={(dish)=>this.onDishSelect(dish)}  />
            )
        }
        const newDishPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='new dish')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const phoPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='pho')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const bunPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='bun')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const vermicelliPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='vermicelli')} onClick={(dish)=>this.onDishSelect(dish)} />
            )
        }
        const comPage = () => {
            return(
                <RenderDish dishes={this.state.dishes.filter((dish)=>dish.category ==='com')} onClick={(dish)=>this.onDishSelect(dish)} />
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
                        <Button color='primary' onClick={this.resetDish}>New Bill</Button>
                    </div>
                </div>
                <Receipt receipt={this.state.selectedDishes}/>
                <Header onClickHandler={this.resetDish} />
                <Switch>
                    <Route path='/appertizer' component={appertizerPage} />
                    <Route path='/newDish' component={newDishPage} />
                    <Route path='/pho' component={phoPage} />
                    <Route path='/bun' component={bunPage} />
                    <Route path='/vermicelli' component={vermicelliPage} />
                    <Route path='/com' component={comPage} />
                    <Route path='/drink' component={drinkPage} />
                    <Route path='/sideOrder' component={sideOrderPage} />
                </Switch>
            </div>
        )
    }
}

export default Main;