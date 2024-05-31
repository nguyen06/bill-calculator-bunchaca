import React from "react";
import { Button } from 'reactstrap';
const Total = (props) => {
    return(
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='float-center'>
                    <Button color='info'>{props.total}</Button>
                </div>
            </div> 
        </div>
    )
}

export default Total;