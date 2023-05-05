import React from 'react';
import { Card, CardTitle,Nav,NavItem,NavLink } from 'reactstrap';

const RenderDish = (props) => {
    const renderDish = props.dishes.map((dish)=>{
        return(
                <div  className="col-2 col-md-3 p-1 mb-2" >
                    <Card onClick={()=>props.onClick(dish)} color="primary" outline="true" key={dish.id}>
                        <CardTitle style={{fontSize: '18px'}} color="white">{dish.id}</CardTitle>
                    </Card>
                </div>
            )
    });
    return(
        <div className='container Header mb-4'>
            <div className='row'>
                {renderDish}
            </div>
        </div>
    )
}

export default RenderDish;