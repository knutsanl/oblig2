import { Link } from "react-router-dom";
function ForgotPassword() {
    return (
        <div className="forgotPassword">
            <form>
                <>
                    <h3>Enter email to get a reset password mail</h3>
                    <label>
                        Email
                    <input type="email" placeholder="Email" required/>
                    </label>
                    <input type="submit" value="submit" />
                </>
            </form>
            <p><Link to="/login">Click here to go back to log in</Link> </p>
        </div>
    )
}
export default ForgotPassword;