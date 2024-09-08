import React, { Component } from 'react';

class TodoCard extends Component {

    removeTodo() {
        this.props.removeTodo(this.props.index); // Usamos el índice para eliminar el todo
    }

    render() {
        const {title,priority,operator,description} = this.props;
        return (
            <div className="card cardTodo">
                <div className='card-header'>
                    <h5 className="card-title">{title}</h5>
                    <span className='badge rounded-pill text-bg-danger'>{priority}</span>
                </div>
                <div className="card-body">
                    <mark>{operator}</mark>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <button className='btn btn-danger' onClick={this.removeTodo.bind(this)}>Delete</button>
                </div>
            </div>
        )
    }
} 

export default TodoCard;