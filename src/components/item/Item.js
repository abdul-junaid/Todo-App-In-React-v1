import React from 'react';
import './Item.css'

const Item = (props) => {
    const {key,item,click} = props.values
    return (
        <div className="item" key={key}>
            {item} <i className="fa fa-trash" onClick={()=>click(key)}></i>
        </div>
    );
}

export default Item;
