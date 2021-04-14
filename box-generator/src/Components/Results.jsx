import React from 'react';
import './Results.css';

const Results = (props) => {

    const {data}=props;

    return (
        <div className='content'>
            { 
      data.length>0 && data.map((item,i)=><div className='box' key={i} style={{backgroundColor:item,color:'#ffffff'}}> {item} </div>)
      
      }
      
        </div>
    );
}

export default Results;
