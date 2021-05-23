import React from 'react';
import './Item.css'

const Item = props => {
    return (
        <div className="item" key={this.props.key}>
            {this.props.item} <i className="fa fa-trash"></i>
        </div>
    );
}

export default Item;
