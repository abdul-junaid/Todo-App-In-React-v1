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

    removeItem = key=>{
        alert(key)
    }

    addItem = event=>{
        event.preventDefault()
        this.setState({items : [...this.state.items,this.state.inputText], inputText : ''})
    }

    render() {
        const {inputText,items} = this.state
        return (
            <>
                <div className="form-section">
                    <form autoComplete="off" onSubmit={this.addItem}>
                        <h1>TODO APP</h1>
                        <div className="input-section">
                            <input type="text" value={inputText} onChange={this.inputChange} placeholder="Enter Item" />
                        </div>
                    </form>
                </div>
                {
                    items.map((value,index)=><Item values={{key : index, item : value, click : ()=>this.removeItem(index)}} key={index} />)
                }
            </>
        );
    }
}

export default Form;
