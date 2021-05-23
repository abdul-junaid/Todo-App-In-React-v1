import React, { Component } from 'react';
import './Form.css';
import Item from '../item/Item';

class Form extends Component {



    render() {
        return (
            <>
                <div className="form-section">
                    <form autoComplete="off">
                        <h1>TODO APP</h1>
                        <div className="input-section">
                            <input type="text" placeholder="Enter Item" />
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Form;
