import React, { Component } from 'react';
import { connect } from 'react-redux'; // Conectar con Redux
import { addTodo, removeTodo } from '../actions/todoActions'; // Importar acciones
import TodoCard from '../components/TodoCard';
import TodoForm from '../components/TodoForm';

class Home extends Component {

    handleAddTodo = (todo) => {
        this.props.addTodo(todo); // Usar la acción de Redux
    }

    removeTodo = (indexToRemove) => {
        this.props.removeTodo(indexToRemove); // Usar la acción de Redux
    }

    render() {
        const { todos } = this.props; // Los 'todos' vienen de Redux
        return (
            <>
                <header>
                    <h1>Home</h1>
                </header>
                <body>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <TodoForm
                                    options={["low", "middle", "high"]}
                                    onAddTodo={this.handleAddTodo}
                                />
                            </div>
                            <div className='col-6 d-flex flex-wrap gap-2 '>
                                {todos.map((todo, index) => {
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
                    </div>
                </body>

            </>
        )
    }
}

// Mapea el estado de Redux al componente
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

// mapDispatchToProps: Mapea las acciones de Redux al componente
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        removeTodo: (index) => dispatch(removeTodo(index))
    };
};

// Conectar el componente con Redux usando mapStateToProps y mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Home);