import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
];

/**function que sirve para parsear o recuperar
 *  todo to que hay guardado en el localstorage
 *  si no hay nada con un '||' devuelve un arreglo vacio
 * */
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [ todos, dispatch] = useReducer(todoReducer , initialState, init)

    //el useEffect se dispara cuando el componente se monta y cada vez que el todo cambia
    useEffect(() => {
        console.log(todos);
        localStorage.setItem('todos', JSON.stringify( todos ) || []);
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
        console.log( {todo })
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //el payload lo mandamos a traves del dispatch
        dispatch(action);
    }
    
    const handleDeleteTodo = ( id ) => {
        console.log({ id });
        dispatch(
            {
                type: '[TODO] Remove Todo',
                payload: id
            }
        );
    } 

    const handleToggleTodo = ( id ) => {
        console.log({ id });
        dispatch(
            {
                type: '[TODO] Toggle Todo',
                payload: id
            }
        );
    }
    
    const todosCount = () => {

        return todos.length;
    }
    
    const pendingTodosCount = () => {

        todos.filter( todo => !todo.done ).length;
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }

}


