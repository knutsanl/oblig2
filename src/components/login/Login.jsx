import { Redirect, Link } from "react-router-dom";
//import { isLoggedIn } from '../../utils/isAuth';
import './Login.css';


//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
function Login(props){
    if (props.redirect) {
            console.log('Hello');
            return <Redirect to={props.redirect} />
       }
        return (
            <div className="Login">

                {!props.isAuth &&
                    <>
                        <h3>Log in</h3>
                        <form onSubmit={props.handleLogIn}>
                            <label>
                                Email:
                         <input type="email" placeholder="E-mail" />
                            </label>
                            <label>
                                Password:
                         <input type="password" placeholder="Enter Password" />
                            </label>
                            <input type="submit" value="submit" />
                        </form>
                        <p> <Link to="/forgot">Forgot Password</Link></p>
                        <Link to="/signUp">Not registered? Sign up here!</Link>
                    </>
                }
            </div>
        );
    }
    export default Login;