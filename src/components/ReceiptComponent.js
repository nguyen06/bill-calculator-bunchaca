import React from 'react';
import { Table } from 'reactstrap';

const Receipt = (props) => {
    if(props.receipt.length !== 0){
        const receipt = props.receipt.map((item)=>{
            return(
                    <tr>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                    </tr>
                )
        });
        const total = props.receipt.map(item=>item.price).reduce((a,b)=>a+b,0);

        return(
            <div className='container table-scrolling'>
                <div className='row '>
                    <Table borderless hover responsive>
                    <thead>
                            <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {receipt}
                        </tbody>
                    </Table>
                    <Table>
                        <tbody>
                            <tr>
                                <th><a style={{color:'red', fontSize:'30px'}}>Total</a></th>
                                <th></th>
                                <th><a style={{color:'red', fontSize:'30px'}}>{total.toFixed(2)}</a></th>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </div>
        )
    }
    else{
        return(
            <div className='container table-scrolling'>
                <div className='row '>
                    <Table borderless hover responsive>
                    <thead>
                            <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                            </tr>
                        </thead>
                    </Table>
    
                </div>
            </div>
        )
    }
}

export default Receipt;