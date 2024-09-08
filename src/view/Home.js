import React, { Component } from 'react';
import todosData from "../utils/todos.json";
import TodoCard from '../components/TodoCard';
import TodoForm from '../components/TodoForm';

const todos = todosData.todos;

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            todos
        };
    }
    handleAddTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo = (indexToRemove) => {
        const updatedTodos = this.state.todos.filter((_, index) => index !== indexToRemove);
        this.setState({ todos: updatedTodos });
    }

    render() {
        return (
            <>
                <header>
                    <h1>Home</h1>
                </header>
                <body className='container-fluid'>
                    <div className='row'>
                        <div className='col-6'>
                            <TodoForm
                                options={["low", "middle", "high"]}
                                onAddTodo={this.handleAddTodo}
                            />
                        </div>
                        <div className='col-6 d-flex flex-wrap gap-2 '>
                            {this.state.todos.map((todo, index) => {
                                return (
                                    <TodoCard
                                        key={index}
                                        index={index}
                                        title={todo.title}
                                        priority={todo.priority}
                                        description={todo.description}
                                        operator={todo.operator}
                                        removeTodo={this.removeTodo}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </body>

            </>
        )
    }
}