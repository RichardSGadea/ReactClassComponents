import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state={
            title:"",
            priority:"low",
            operator:"",
            description:""
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTodo(this.state)
    }

    render() {
        const { options } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Title</label>
                    <input type="text" name='title' className="form-control" onChange={this.handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Description</label>
                    <input type="text" name='description' className="form-control" onChange={this.handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Operator</label>
                    <input type="text" name='operator' className="form-control "  onChange={this.handleInputChange}/>
                </div>
                <div class="mb-3">
                    <label className="form-label text-light fw-bold">Priority</label>
                    <select name='priority' className="form-select" onChange={this.handleInputChange}>
                        {options.map((option, index) => {
                            return(
                                <option key={index}>{option}</option>
                            )
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

export default TodoForm;