import React from 'react';
import { Table } from 'reactstrap';

const Receipt = (props) => {
    if(props.receipt.length !== 0){
        const receipt = props.receipt.map((item)=>{
            return(
                    <tr>
                        <th><p style={{fontSize:"12px"}}>{item.id.substring(0,2)}</p ></th>
                        <th><p style={{fontSize:"12px"}}>{item.name.substring(0,10)}</p ></th>
                        <th><p style={{fontSize:"12px"}}>{item.price}</p ></th>
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
                                <th><p style={{color:'red', fontSize:'15px'}}>Total</p ></th>
                                <th></th>
                                <th><p style={{color:'red', fontSize:'15px'}}>{total.toFixed(2)}</p ></th>
                            </tr>
                            <tr>
                                <th><p style={{color:'red', fontSize:'15px'}}># Items</p ></th>
                                <th></th>
                                <th><p style={{color:'red', fontSize:'15px'}}>{props.receipt.length}</p ></th>
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