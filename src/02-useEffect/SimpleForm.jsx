import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [ formState, setFormState ] = useState({
        username: 'piful',
        email: 'gerard@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target}) => {
        // console.log(target.value);
        const { name, value } = target;
        console.log(name, value);
        setFormState({
            ...formState, 
            [ name ]: value
        })
    } 

    useEffect( () => {
        // console.log('useEffect called!')
    }, []);

    
    useEffect( () => {
        // console.log('formState changed!')
    }, [ formState ]);

    useEffect( () => {
        // console.log('EMAIL changed!')
    }, [ email ]);

    
    return (
        <>
            <h1>Simple Form</h1>
            
            <hr/>

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            
            {
                ( username === 'piful' ) && <Message />
            }

            <input 
                type="email" 
                className="form-control "
                placeholder="gerard@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

        </>
    )
}

