import React from 'react';
import { Card, CardTitle,Nav,NavItem,NavLink } from 'reactstrap';

const RenderDish = (props) => {
    const renderDish = props.dishes.map((dish)=>{
        return(
                <div  className="col-2 col-md-3 mt-2 " >
                    <Card onClick={()=>props.onClick(dish)} color="primary" outline="true" key={dish.id}>
                        <CardTitle color="white">{dish.id}</CardTitle>
                    </Card>
                </div>
            )
    });
    return(
        <div className='container'>
            <div className='row'>
                {renderDish}
            </div>
        </div>
    )
}

export default RenderDish;