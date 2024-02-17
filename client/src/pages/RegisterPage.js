// useState is a React hook that allows functional components to manage state.
import { useState } from "react";

export default function RegisterPage() {
    // This declares a state variable 'username' using the useState hook.
    // The useState hook returns an array with two elements: the current state value and a function to update the state.
    // setUsername is the function to update the 'username' state, initialized with an empty string as its initial value.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //The register function is defined with ev as its parameter. This function handles the form submission event.
    //ev.preventDefault() prevents the default behavior of the form submission, which would cause the page to reload.
    async function register(ev) {
        ev.preventDefault();
        //await keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected)
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        //when a server successfully processes a request, it typically responds with a status code of 200 OK.
        if (response.status == 200) {
            //create pop up alert
            alert('registration successful');

        } else {
            alert('registration failed');
        }
    }

    return (
        // This is the JSX code returned by the RegisterPage component.
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            {/* changes the username and password in the const above whenever someone types in it and changes it */}
            <input type="text" placeholder="username" value={username}
                onChange={ev => setUsername(ev.target.value)} />
            <input type="password" placeholder="password" value={password}
                onChange={ev => setPassword(ev.target.value)} />
            <button>Register</button>
        </form>
    );
}