import React, { Component } from 'react';
import './Form.css';
import Item from '../item/Item';

class Form extends Component {

    state = {
        inputText : '',
        items : []
    }

    inputChange = event=>{
        this.setState({inputText : event.target.value})
    }

    render() {
        const {text,items} = this.state
        return (
            <>
                <div className="form-section">
                    <form autoComplete="off">
                        <h1>TODO APP</h1>
                        <div className="input-section">
                            <input type="text" value={text} onChange={this.inputChange} placeholder="Enter Item" />
                        </div>
                    </form>
                </div>
                {
                    items.map((value,index)=><Item key={index} item={value} />)
                }
            </>
        );
    }
}

export default Form;
