import React from 'react';
import { Button } from 'reactstrap';

const NewBill = () => {
    return(
        <div className='container mt-4 mb-4 '>
            <div className='row justify-content-center'>
                <Button color='primary' href='/'>New Bill</Button>
            </div>
        </div>
    )
}

export default NewBill;