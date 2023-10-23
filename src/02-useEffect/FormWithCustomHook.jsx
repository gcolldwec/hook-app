import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    
    //TOT LO DE ABAJO NOS LO LLEVAMOS AL HOOK USEFORM
    // const [ formState, setFormState ] = useState({
    //     username: 'piful',
    //     email: 'gerard@gmail.com',
    //     password: ''
    // });

    // const { username, email, password } = formState;

    // const onInputChange = ({ target}) => {
    //     // console.log(target.value);
    //     const { name, value } = target;
    //     console.log(name, value);
    //     setFormState({
    //         ...formState, 
    //         [ name ]: value
    //     })
    // } 

    const {  formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''   
    })

    // const { username, email, password } = formState;

    // useEffect( () => {
    //     console.log('useEffect called!')
    // }, []);

    
    // useEffect( () => {
    //     console.log('formState changed!')
    // }, [ formState ]);

    // useEffect( () => {
    //     console.log('EMAIL changed!')
    // }, [ email ]);

    
    return (
        <>
            <h1>Formulario con CustomHook</h1>
            
            <hr/>

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            
           

            <input 
                type="email" 
                className="form-control "
                placeholder="gerard@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control "
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-warning mt-2 ml-2">Reset</button>

        </>
    )
}

