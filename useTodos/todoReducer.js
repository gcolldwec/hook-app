//{ type: [ todo remove], payload: id}


export const todoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = abc no está implementada')
            //en este caso el return devuelve un array porque nuestro initialState es un array
            //en el action.payload vamos a tener el nuevc todo
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            /*con el filter nos devuelve un  nuevo arreglo*/ 
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toggle Todo':
            /**Utilizamos el map,llama al callback y regresa un arreglo*/
            return initialState.map( todo => {
                //el payload es el 'id' del action
                if( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
        default:
            return initialState;
    }
}